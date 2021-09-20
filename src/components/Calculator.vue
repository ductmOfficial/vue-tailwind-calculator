<template>
  <div
    class="
      mx-auto
      overflow-hidden
      shadow-lg
      bg-purple-900
      border
      rounded-xl
      xl:w-3/12
      lg:w-5/12
      md:w-6/12
      sm:w-7/12
    "
  >
    <div class="">
      <div class="p-5 text-white text-center text-3xl bg-purple-900">
        <span class="text-pink-500 uppercase font-semibold">Calcu</span>lator
      </div>
      <div
        class="py-3 px-5 pb-0 text-white text-right text-3xl bg-purple-800"
        v-text="formula || '0'"
      ></div>
      <div
        class="py-3 px-5 mb-3 text-pink-500 text-right text-4xl bg-purple-800"
        v-text="currVal"
      ></div>

      <div class="flex items-stretch h-20">
        <div
          class="
            flex-1
          px-2
          py-2
          justify-center
          flex
          items-center
          text-white text-2xl
          font-semibold
          "
        >
          <div
            data-value="AC"
            @click="initialize"
            class="
              rounded-full
            h-16
            w-16
            flex
            items-center
            bg-purple-800
            justify-center
            shadow-lg
            border-2 border-purple-700
            hover:border-2 hover:border-gray-500
            focus:outline-none
            "
          >
            AC
          </div>
        </div>
        <div
          class="
          flex-1
          px-2
          py-2
          justify-center
          flex
          items-center
          text-white text-2xl
          font-semibold
        "
        >
          <div
            class="
            rounded-full
            h-16
            w-16
            flex
            items-center
            bg-purple-800
            justify-center
            shadow-lg
            border-2 border-purple-700
            hover:border-2 hover:border-gray-500
            focus:outline-none
          "
          >
            (
          </div>
        </div>

        <div
          class="
          flex-1
          px-2
          py-2
          justify-center
          flex
          items-center
          text-white text-2xl
          font-semibold
        "
        >
          <div
            class="
            rounded-full
            h-16
            w-16
            flex
            items-center
            bg-purple-800
            justify-center
            shadow-lg
            border-2 border-purple-700
            hover:border-2 hover:border-gray-500
            focus:outline-none
          "
          >
            )
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="/"
            @click="operatorClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            ÷
          </div>
        </div>
      </div>

      <div class="flex items-stretch h-20">
        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="7"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            7
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="8"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            8
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="9"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            9
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="x"
            @click="operatorClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            ×
          </div>
        </div>
      </div>

      <div class="flex items-stretch h-20">
        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="4"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            4
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="5"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            5
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="6"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            6
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="‑"
            @click="operatorClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            -
          </div>
        </div>
      </div>

      <div class="flex items-stretch h-20">
        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="1"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            1
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="2"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            2
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="3"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            3
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="+"
            @click="operatorClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            +
          </div>
        </div>
      </div>

      <div class="flex items-stretch h-20 mb-4">
        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="+"
            @click="operatorClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            +
          </div>
        </div>
        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="0"
            @click="numberClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            0
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="."
            @click="decimalClicked($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-purple-800
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            .
          </div>
        </div>

        <div
          class="
            flex-1
            px-2
            py-2
            justify-center
            flex
            items-center
            text-white text-2xl
            font-semibold
          "
        >
          <div
            data-value="="
            @click="handleEvaluate($event)"
            class="
              rounded-full
              h-16
              w-16
              flex
              items-center
              bg-pink-500
              justify-center
              shadow-lg
              border-2 border-purple-700
              hover:border-2 hover:border-gray-500
              focus:outline-none
            "
          >
            =
          </div>
        </div>
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
      this.currVal = '0';
      this.prevVal = '0';
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

    operatorClicked(e) {
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
