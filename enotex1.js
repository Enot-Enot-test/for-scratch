(function (Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('EHOT Ex1 extension needs to be run unsandboxed');
  }

  const TURBO_MODE = 'turbo mode';
  const INTERPOLATION = 'interpolation';
  const REMOVE_FENCING = 'remove fencing';
  const REMOVE_MISC_LIMITS = 'remove misc limits';

  class enotex1 {
    getInfo () {
      return {
        id: 'enotex1',
        name: 'EHOT Ex1',
        color1: '#3467eb',
        color2: '#4e7bed',
        color3: '#2d53b3',

        blocks: [
          {
            opcode: "letters_of",
            blockType: Scratch.BlockType.REPORTER,
            text: "буквы с [LETTER1] до [LETTER2] в [STRING]",
            arguments: {
              LETTER1: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              },
              LETTER2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 4
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "еноты"
              }
            }
          },
          {
            opcode: "replace",
            blockType: Scratch.BlockType.REPORTER,
            text: "заменить [SUBSTRING] в [STRING] на [REPLACE]",
            arguments: {
              SUBSTRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "виключи"
              },
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Будьласка, виключи світло"
              },
              REPLACE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "вимкни"
              }
            }
          },
		  {
            opcode: 'setDimensions',
            text: 'задать размер окна: ширина: [width] высота: [height]',
            blockType: Scratch.BlockType.COMMAND,
            arguments: {
              width: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '480'
              },
              height: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '360'
              }
            }
          },
          {
            opcode: 'whenBooleanHat',
            blockType: Scratch.BlockType.HAT,
            text: 'если [INPUT]',
            isEdgeActivated: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },
          {
            opcode: 'whenKeyString',
            blockType: Scratch.BlockType.HAT,
            text: 'если клавиша [KEY_OPTION] нажата',
            isEdgeActivated: true,
            arguments: {
              KEY_OPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'enter'
              }
            }
          },
          {
            opcode: 'keyStringPressed',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'клавиша [KEY_OPTION] нажата?',
            arguments: {
              KEY_OPTION: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'enter'
              }
            }
          },
		  {
            opcode: 'notEqualTo',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] ≠ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Чё-то'
              },
              INPUTB: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'щось'
              }
            }
          },
          {
            opcode: 'moreThanEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] ≥ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '16'
              }
            }
          },
          {
            opcode: 'lessThanEqual',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[INPUTA] ≤ [INPUTB]',
            arguments: {
              INPUTA: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10'
              },
              INPUTB: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '16'
              }
            }
          },
          {
            opcode: 'greenFlag',
            blockType: Scratch.BlockType.COMMAND,
            text: 'запуск (зелёный флаг)',
          },
          {
            opcode: 'setUsername',
            blockType: Scratch.BlockType.COMMAND,
            text: 'задать имя пользователя [INPUT]',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Чел'
              }
            }
          },
          {
            opcode: 'alertBlock',
            blockType: Scratch.BlockType.COMMAND,
            text: 'вывести сообщение [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Крутое сообщение!'
              }
            }
          },
          {
            opcode: 'inputPromptBlock',
            blockType: Scratch.BlockType.REPORTER,
            text: 'вывести текстовое поле [STRING]',
            disableMonitor: true,
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Введите текст'
              }
            }
          },
          {
            opcode: 'confirmationBlock',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'вывести вопрос [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Сейчас 112 год чучхе?'
              }
            }
          },
          {
            opcode: 'goToLink',
            blockType: Scratch.BlockType.COMMAND,
            text: 'открыть ссылку [INPUT] в новой вкладке',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'google.com'
              }
            }
          },
          {
            opcode: 'redirectToLink',
            blockType: Scratch.BlockType.COMMAND,
            text: 'открыть ссылку [INPUT] в этой вкладке',
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'google.com'
              }
            }
          },
          {
            opcode: 'newlineCharacter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'энтр',
            disableMonitor: true
          },
        ],
		
      };
    }

    setDimensions ({ width, height }) {
      width = +width || 0;
      height = +height || 0;
      Scratch.vm.setStageSize(width, height);
    }
	
	letters_of(args, util) {
      args.STRING = args.STRING.toString();
      args.LETTER1 = Number(args.LETTER1) || 0;
      args.LETTER2 = Number(args.LETTER2) || 0;
      return args.STRING.substring(args.LETTER1 - 1, args.LETTER2);
    }

    _caseInsensitiveRegex(str) {
      return new RegExp(
        str.replaceAll(/[^a-zA-Z0-9]/g, "\\$&"),
        "gi"
      );
    }

    replace(args, util) {
      args.STRING = args.STRING.toString();
      args.SUBSTRING = args.SUBSTRING.toString();

      args.REPLACE = args.REPLACE.toString();

      const regex = this._caseInsensitiveRegex(args.SUBSTRING);

      return args.STRING.replace(regex, args.REPLACE);
    }
    whenBooleanHat(args) {
      return args.INPUT;
    }

    whenKeyString(args, util) {
      return util.ioQuery('keyboard', 'getKeyIsDown', [args.KEY_OPTION]);
    }

    newlineCharacter() {
      return '\n';
    }

    keyStringPressed(args, util) {
      return util.ioQuery('keyboard', 'getKeyIsDown', [args.KEY_OPTION]);
    }

    notEqualTo(args) {
      return (args.INPUTA != args.INPUTB);
    }

    moreThanEqual(args) {
      return (args.INPUTA >= args.INPUTB);
    }

    lessThanEqual(args) {
      return (args.INPUTA <= args.INPUTB);
    }

    goToLink(args) {
      Scratch.openWindow(args.INPUT);
    }

    redirectToLink(args) {
      Scratch.redirect(args.INPUT);
    }

    greenFlag(args, util) {
      util.runtime.greenFlag();
    }

    setUsername(args, util) {
      util.runtime.ioDevices.userData._username = args.INPUT;
    }

    alertBlock(args) {
      alert(args.STRING);
    }

    inputPromptBlock(args) {
      return prompt(args.STRING);
    }

    confirmationBlock(args) {
      if (confirm(args.STRING)) {
        return true;
      } else {
        return false;
      }
    }
  }

  Scratch.extensions.register(new enotex1());
})(window.Scratch);