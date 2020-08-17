(function () {
    'use strict';

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
            'pattern': /\b(?:ARCHIVE|FILE_ATTRIBUTE_(?:ARCHIVE|NORMAL|OFFLINE|READONLY|SYSTEM|TEMPORARY)|HK(?:C(?:R(?:(?:32|64))?|U(?:(?:32|64))?)|DD|EY_(?:C(?:LASSES_ROOT|URRENT_(?:CONFIG|USER))|DYN_DATA|LOCAL_MACHINE|PERFORMANCE_DATA|USERS)|LM(?:(?:32|64))?|PD|U)|ID(?:ABORT|CANCEL|IGNORE|NO|OK|RETRY|YES)|MB_(?:ABORTRETRYIGNORE|DEFBUTTON[1234]|ICON(?:EXCLAMATION|INFORMATION|QUESTION|STOP)|OK(?:CANCEL)?|R(?:ETRYCANCEL|IGHT|TLREADING)|SETFOREGROUND|TOPMOST|USERICON|YESNO)|OFFLINE|READONLY|S(?:H(?:CTX|ELL_CONTEXT)|YSTEM)|TEMPORARY|Win(?:10|Vista|[78])|a(?:dmin|ll|uto)|b(?:ot(?:tom|h)|zip2)|c(?:o(?:lored|mponents)|u(?:rrent|stom))|directory|f(?:alse|orce)|hi(?:de|ghest)|i(?:f(?:diff|newer)|nstfiles)|l(?:astused|e(?:ave|ft)|i(?:cense|stonly)|zma)|n(?:evershow|o(?:ne|rmal|tset))|o(?:ff|pen|n)|print|right|s(?:how|ilent(?:log)?|mooth)|t(?:extonly|op|r(?:ue|y))|u(?:n(?:\.(?:c(?:omponents|ustom)|directory|instfiles|license)|instConfirm)|ser)|zlib)(?=\(|\b)/g
        },
        {
            'matches': {
                1: 'variable.dollar-sign',
                2: 'variable'
            },
            'pattern': /(\$)(\w+)\b/g
        },
        {
            'name': 'variable.definition',
            'pattern': /\${[\w]+}/g
        },
        {
            'name': 'variable.language',
            'pattern': /\$\([\w]+\)/g
        },
        {
            'name': 'support.compiler',
            'pattern': /!(?:a(?:dd(?:includedir|plugindir)|ppendfile)|cd|de(?:fine|lfile)|e(?:cho|rror|xecute)|finalize|get(?:dllversion|tlbversion)|in(?:clude|sertmacro)|makensis|p(?:ackhdr|ragma)|s(?:earch(?:parse|replace)|ystem)|tempfile|undef|verbose|warning)(?=\(|\b)/g
        },
        {
            'name': 'entity.compiler.block',
            'pattern': /!(?:e(?:lse|ndif)|if(?:(?:def|macro(?:def|ndef)|ndef))?)(?=\(|\b)/g
        },
        {
            'name': 'keyword.command',
            'pattern': /\b(?:A(?:bort|dd(?:BrandingImage|Size)|llow(?:RootDirInstall|SkipFiles)|utoCloseWindow)|B(?:G(?:Font|Gradient)|r(?:andingText|ingToFront))|C(?:RCCheck|a(?:ll(?:InstDLL)?|ption)|h(?:angeUI|eckBitmap)|learErrors|o(?:mp(?:letedText|onentText)|pyFiles)|reate(?:Directory|Font|ShortCut))|D(?:e(?:lete(?:(?:INIS(?:ec|tr)|Reg(?:Key|Value)))?|tail(?:Print|sButtonText))|ir(?:Text|V(?:ar|erify)))|E(?:n(?:ableWindow|umReg(?:Key|Value))|x(?:ch|ec(?:(?:Shell(?:Wait)?|Wait))?|pandEnvStrings))|F(?:i(?:le(?:(?:BufSize|Close|ErrorText|Open|Read(?:(?:Byte|UTF16LE|Word))?|Seek|Write(?:(?:Byte|UTF16LE|Word))?))?|nd(?:Close|First|Next|Window))|lushINI)|G(?:et(?:Cur(?:InstType|rentAddress)|D(?:LLVersion(?:Local)?|lgItem)|ErrorLevel|F(?:ileTime(?:Local)?|u(?:llPathName|nctionAddress))|InstDirError|KnownFolderPath|LabelAddress|TempFileName)|oto)|HideWindow|I(?:con|f(?:Abort|Errors|FileExists|R(?:ebootFlag|tlLanguage)|S(?:hellVarContextAll|ilent))|n(?:itPluginsDir|st(?:ProgressFlags|Type(?:(?:GetText|SetText))?|all(?:ButtonText|Colors|Dir(?:RegKey)?))|t(?:64(?:CmpU?|Fmt)|CmpU?|Fmt|Op|Ptr(?:CmpU?|Op)))|sWindow)|L(?:angString|icense(?:BkColor|Data|ForceSelection|LangString|Text)|o(?:ad(?:AndSetImage|LanguageFile)|ckWindow|g(?:Set|Text)))|M(?:anifest(?:DPIAware|LongPathAware|MaxVersionTested|SupportedOS)|essageBox|iscButtonText)|N(?:ame|op)|OutFile|P(?:E(?:AddResource|DllCharacteristics|RemoveResource|SubsysVer)|age(?:Callbacks)?|op|ush)|Quit|R(?:MDir|e(?:ad(?:EnvStr|INIStr|Reg(?:DWORD|Str))|boot|gDLL|name|questExecutionLevel|serveFile|turn))|S(?:e(?:archPath|ction(?:Get(?:Flags|InstTypes|Size|Text)|In|Set(?:Flags|InstTypes|Size|Text))|ndMessage|t(?:AutoClose|BrandingImage|C(?:ompress(?:or(?:DictSize)?)?|tlColors|urInstType)|D(?:at(?:ablockOptimize|eSave)|etails(?:Print|View))|Error(?:Level|s)|F(?:ileAttributes|ont)|O(?:utPath|verwrite)|Re(?:bootFlag|gView)|S(?:hellVarContext|ilent)))|how(?:InstDetails|UninstDetails|Window)|ilent(?:Install|UnInstall)|leep|paceTexts|tr(?:C(?:mpS?|py)|Len)|ubCaption)|Un(?:RegDLL|i(?:code|nst(?:Page|all(?:ButtonText|Caption|Icon|SubCaption|Text))))|V(?:I(?:AddVersionKey|FileVersion|ProductVersion)|ar)|W(?:indowIcon|rite(?:INIStr|Reg(?:Bin|DWORD|ExpandStr|MultiStr|None|Str)|Uninstaller))|XPStyle)(?=\(|\b)/g
        },
        {
            'name': 'keyword.plugin',
            'pattern': /\b(\w+::\w+)(?=\(|\b)/g
        },
        {
            'name': 'entity.command.block',
            'pattern': /\b(?:Function(?:End)?|PageEx(?:End)?|Section(?:(?:End|Group(?:End)?))?)(?=\(|\b)/g
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

}());
