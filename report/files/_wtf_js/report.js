__report = {
  "info": {
    "file": "upstream\\wtf.js",
    "fileShort": "\\wtf.js",
    "fileSafe": "_wtf_js",
    "link": "files/_wtf_js/index.html"
  },
  "complexity": {
    "aggregate": {
      "line": 12,
      "complexity": {
        "sloc": {
          "physical": 551,
          "logical": 506
        },
        "cyclomatic": 6,
        "halstead": {
          "operators": {
            "distinct": 18,
            "total": 573,
            "identifiers": [
              "__stripped__"
            ]
          },
          "operands": {
            "distinct": 930,
            "total": 1075,
            "identifiers": [
              "__stripped__"
            ]
          },
          "length": 1648,
          "vocabulary": 948,
          "difficulty": 10.403225806451614,
          "volume": 16296.64887418433,
          "effort": 169537.71812659505,
          "bugs": 5.432216291394776,
          "time": 9418.76211814417
        }
      }
    },
    "functions": [
      {
        "name": "<anonymous>.wtfify",
        "line": 489,
        "complexity": {
          "sloc": {
            "physical": 59,
            "logical": 29
          },
          "cyclomatic": 4,
          "halstead": {
            "operators": {
              "distinct": 14,
              "total": 56,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 36,
              "total": 84,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 140,
            "vocabulary": 50,
            "difficulty": 16.333333333333336,
            "volume": 790.1398665684615,
            "effort": 12905.617820618205,
            "bugs": 0.2633799555228205,
            "time": 716.9787678121224
          }
        }
      },
      {
        "name": "<anonymous>",
        "line": 523,
        "complexity": {
          "sloc": {
            "physical": 12,
            "logical": 9
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 10,
              "total": 26,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 15,
              "total": 34,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 60,
            "vocabulary": 25,
            "difficulty": 11.333333333333332,
            "volume": 278.63137138648347,
            "effort": 3157.822209046812,
            "bugs": 0.09287712379549448,
            "time": 175.43456716926732
          }
        }
      },
      {
        "name": "<anonymous>.htmlElement",
        "line": 555,
        "complexity": {
          "sloc": {
            "physical": 8,
            "logical": 7
          },
          "cyclomatic": 2,
          "halstead": {
            "operators": {
              "distinct": 6,
              "total": 19,
              "identifiers": [
                "__stripped__"
              ]
            },
            "operands": {
              "distinct": 16,
              "total": 28,
              "identifiers": [
                "__stripped__"
              ]
            },
            "length": 47,
            "vocabulary": 22,
            "difficulty": 5.25,
            "volume": 209.59328607595296,
            "effort": 1100.364751898753,
            "bugs": 0.06986442869198432,
            "time": 61.13137510548628
          }
        }
      }
    ],
    "maintainability": 97.31434143382032,
    "module": "\\wtf.js"
  },
  "jshint": {
    "messages": [
      {
        "severity": "error",
        "line": 535,
        "column": 10,
        "message": "Bad for in variable 'x'.",
        "source": "Bad for in variable '{a}'."
      }
    ]
  }
}