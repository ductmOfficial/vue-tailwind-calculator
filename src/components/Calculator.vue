<template>
  <div class="calculator">
    <div class="formula-screen" v-text="formula"></div>
    <div id="display" class="output-screen" v-text="currVal"></div>
    <div class="input-screen">
      <div id="clear" data-value="AC" @click="initialize">AC</div>
      <div id="divide" data-value="/" @click="oparatorClicked($event)">
        /
      </div>
      <div id="multiply" data-value="x" @click="oparatorClicked($event)">
        x
      </div>
      <div id="seven" data-value="7" @click="numberClicked($event)">
        7
      </div>
      <div id="eight" data-value="8" @click="numberClicked($event)">
        8
      </div>
      <div id="nine" data-value="9" @click="numberClicked($event)">
        9
      </div>
      <div id="subtract" data-value="‑" @click="oparatorClicked($event)">
        -
      </div>
      <div id="four" data-value="4" @click="numberClicked($event)">
        4
      </div>
      <div id="five" data-value="5" @click="numberClicked($event)">
        5
      </div>
      <div id="six" data-value="6" @click="numberClicked($event)">
        6
      </div>
      <div id="add" data-value="+" @click="oparatorClicked($event)">
        +
      </div>
      <div id="one" data-value="1" @click="numberClicked($event)">
        1
      </div>
      <div id="two" data-value="2" @click="numberClicked($event)">
        2
      </div>
      <div id="three" data-value="3" @click="numberClicked($event)">
        3
      </div>
      <div id="equals" data-value="=" @click="handleEvaluate($event)">
        =
      </div>
      <div id="zero" data-value="0" @click="numberClicked($event)">
        0
      </div>
      <div id="decimal" data-value="." @click="decimalClicked($event)">
        .
      </div>
    </div>
  </div>
</template>

<script>
import helper from './helper';

const LIMIT_TEXT = 'Digit Limit Met';
const isOperator = /[x/+‑]/;
const endsWithOperator = /[x+‑/]$/;
const endsWithNegativeSign = /\d[x/+‑]{1}‑$/;

export default {
  name: 'Calculator',
  data() {
    return {
      prevVal: '0',
      currVal: '0',
      formula: '',
      evaluated: false,
    };
  },
  methods: {
    initialize() {
      this.currVal = 0;
      this.prevVal = 0;
      this.formula = '';
      this.evaluated = false;
    },

    maxDigitWarning() {
      this.prevVal = this.currVal;
      this.currVal = LIMIT_TEXT;

      setTimeout(() => {
        this.currVal = this.prevVal;
      }, 1000);
    },

    numberClicked(e) {
      if (this.currVal.includes(LIMIT_TEXT)) return;

      const value = e.target.dataset.value;

      if (this.currVal.length > 21) {
        this.maxDigitWarning();
      } else if (this.evaluated) {
        this.currVal = value;
        this.formula = value !== '0' ? value : '';
      } else {
        this.currVal =
          this.currVal === '0' || isOperator.test(this.currVal)
            ? value
            : this.currVal + value;

        this.formula =
          this.currVal === '0' && value === '0'
            ? this.formula === ''
              ? value
              : this.formula
            : /([^.0-9]0|^0)$/.test(this.formula)
            ? this.formula.slice(0, -1) + value
            : this.formula + value;
      }

      this.evaluated = false;
    },

    oparatorClicked(e) {
      if (this.currVal.includes(LIMIT_TEXT)) return;

      const value = e.target.dataset.value;

      if (this.evaluated) {
        this.formula = `${this.prevVal}${value}`;
      } else if (!endsWithOperator.test(this.formula)) {
        this.prevVal = this.formula;
        this.formula = this.formula + value;
      } else if (!endsWithNegativeSign.test(this.formula)) {
        this.formula =
          (endsWithNegativeSign.test(this.formula + value)
            ? this.formula
            : this.prevVal) + value;
      } else if (value !== '-') {
        this.formula = this.prevVal + value;
      }

      this.currVal = value;
      this.evaluated = false;
    },

    decimalClicked() {
      if (this.evaluated) {
        this.currVal = '0.';
        this.formula = '0.';
        this.evaluated = false;
      } else if (
        !this.currVal.includes('.') &&
        !this.currVal.includes(LIMIT_TEXT)
      ) {
        if (this.currVal.length > 21) {
          this.maxDigitWarning();
        } else if (
          endsWithOperator.test(this.formula) ||
          (this.currVal === '0' && this.formula === '')
        ) {
          this.currVal = '0.';
          this.formula = `${this.formula}0.`;
        } else {
          this.currVal = this.formula.match(/(-?\d+\.?\d*)$/)[0] + '.';
          this.formula = `${this.formula}.`;
        }

        this.evaluated = false;
      }
    },

    handleEvaluate() {
      if (this.currVal.includes(LIMIT_TEXT)) return;

      const expression = helper.getExpression(this.formula, endsWithOperator);
      const anwser = helper.getAnswer(expression);

      this.currVal = anwser;
      this.prevVal = anwser;
      this.formula = `${this.formula}=${anwser}`;
      this.evaluated = true;
    },
  },
};
</script>

<style>
.calculator {
  width: 320px;
  height: 380px;
  background-color: black;

  display: flex;
  flex-direction: column;
  padding: 5px;
}

.formula-screen {
  height: 25px;
  font-size: 1rem;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
  color: orange;
}

.output-screen {
  height: 30px;
  font-size: 1.5rem;
  align-items: flex-end;
  justify-content: flex-end;
  display: flex;
}

.input-screen {
  flex: 1;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 1px;
  row-gap: 1px;
}

.input-screen > div {
  font-size: 1.5rem;
  background-color: #4d4d4d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
}

.input-screen > div:hover {
  color: black;
  border: 1px solid blanchedalmond;
}

#subtract,
#add,
#divide,
#multiply {
  background-color: rgb(102, 102, 102);
}

#equals {
  background-color: rgb(0, 68, 102);
  grid-column: 4/5;
  grid-row: 4/6;
}

#clear {
  background-color: rgb(172, 57, 57);
  grid-column: 1/3;
}

#zero {
  grid-column: 1/3;
}
</style>
