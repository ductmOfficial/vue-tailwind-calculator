export default {
  getExpression: (formulaString, endsWithOperator) => {
    let expression = formulaString;

    while (endsWithOperator.test(expression)) {
      expression = expression.slice(0, -1);
    }

    expression = expression
      .replace(/x/g, '*')
      .replace(/‑/g, '-')
      .replace('--', '+0+0+0+0+0+0+');

    return expression;
  },
  getAnswer: (expression) => {
    const anwser = Math.round(1000000000000 * eval(expression)) / 1000000000000;

    return anwser.toString();
  },
};
