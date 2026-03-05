import { ELEMENTS } from "./dom.js";
const { DIV, FORM, FIELDSET, LEGEND, H2, INPUT, LABLE } = ELEMENTS;

const createHTMLElement = (element, attrs) => {
  const htmlElement = document.createElement(element);
  for (const [key, val] of Object.entries(attrs)) {
    htmlElement.setAttribute(key, val);
  }
  return htmlElement;
}

const renderFragment = ([element, attrs, ...content]) => {
  const htmlElement = createHTMLElement(element, attrs);
  if (content.length === 1 && (typeof content[0] !== "object")) {
    htmlElement.textContent = content;
    return htmlElement;
  }

  const children = content.map(renderFragment);
  htmlElement.append(...children);
  return htmlElement;
}

const createInputAtr = (id, value) =>
  ({ type: "radio", name: "option", id: `option-${id}`, value });

const cls = (value) => ({ class: value });

const getOptionElements = (options) =>
  options.map((x, i) => [
    DIV, cls("option"),
    [INPUT, createInputAtr(i + 1, x), ""],
    [LABLE, { for: `option-${i + 1}` }, x]
  ]
  );

export const generateForm = (question) => {
  const dom = [
    FORM, { action: "/" }, [
      FIELDSET, {}, [
        LEGEND, {}, [
          H2, {}, `${question["questionNo"]}. ${question["question"]}`
        ],
        ...getOptionElements(question.options),
        [
          INPUT, { id: "btn", type: "submit", value: "submit" }
        ],
      ]
    ]
  ];

  return renderFragment(dom);
}