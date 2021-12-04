/*! rainbow-nsis | MIT License | https://github.com/idleberg/rainbow-nsis */

Rainbow.extend('nsis', [
    {
        'name': 'comment.line',
        'pattern': /(#|;)[\s\S]*?$/gm
    },
    {
        'name': 'comment.block',
        'pattern': /\/\*[\s\S]*?\*\/|(\/\/|#)[\s\S]*?$/gm
    },
    {
        'name': 'constant.numeric',
        'pattern': /\b(\d+(\.\d+)?(e(\+|-)?\d+)?(f|d)?|0x[\da-f]+)\b/gi
    },
    {
        'name': 'constant.language',
        'pattern': /\b%NSIS_CONSTANTS%(?=\(|\b)/g
    },

    {
        'name': 'constant.option',
        'pattern': /\b%NSIS_PROPERTIES%(?=\(|\b)/g
    },
    {
        'matches': {
            1: 'variable.dollar-sign',
            2: 'variable'
        },
        'pattern': /(\$)(\w[\w\.]*)\b/g
    },
    {
        'name': 'variable.definition',
        'pattern': /\${[\w.:-]+}/g
    },
    {
        'name': 'variable.language',
        'pattern': /\$\([\w^.:-]+\)/g
    },
    {
        'name': 'support.compiler',
        'pattern': /%NSIS_IMPORTANT%(?=\(|\b)/g
    },
    {
        'name': 'entity.compiler.block',
        'pattern': /%NSIS_IMPORTANT_BLOCKS%(?=\(|\b)/g
    },
    {
        'name': 'keyword.command',
        'pattern': /\b%NSIS_KEYWORDS%(?=\(|\b)/g
    },
    {
        'name': 'keyword.plugin',
        'pattern': /\b(\w+::\w+)(?=\(|\b)/g
    },
    {
        'name': 'entity.command.block',
        'pattern': /\b%NSIS_BLOCKS%(?=\(|\b)/g
    },
    {
        'name': 'string',
        'matches': {
            1: 'string.open',
            2: [{
                'name': 'string.interpolation',
                'matches': {
                    1: 'string.open',
                    2: {
                      'language': 'nsis'
                    },
                    3: 'string.close'
                },
                'pattern': /(#\{)(.*?)(\})/g
            }],
            3: 'string.close'
        },
        'pattern': /("|`|')(.*?[^\\\1])?(\1)/g
    }
], true);
