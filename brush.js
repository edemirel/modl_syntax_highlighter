var BrushBase = require('brush-base');
var regexLib = require('syntaxhighlighter-regex').commonRegExp;

function Brush() {
  // Contributed by Gheorghe Milas and Ahmad Sherif

  var keywords = 'AND WHERE OR if endprocedure else Where elseif procedure '+
                 'foreach call while do then endif endwhile endforeach in '
                 'If ForEach Endif EndIf While Then Else Foreach';

  var funcs = '__import__ abs all any apply basestring bin bool buffer callable ' +
    'chr classmethod cmp coerce compile complex delattr dict dir ' +
    'divmod enumerate eval execfile file filter float format frozenset ' +
    'getattr globals hasattr hash help hex id input int intern ' +
    'isinstance issubclass iter len list locals long map max min next ' +
    'object oct open ord pow print property range raw_input reduce ' +
    'reload repr reversed round set setattr slice sorted staticmethod ' +
    'str sum super tuple type type unichr unicode vars xrange zip';

  var special = 'None True False self cls class_';

  this.regexList = [
    {
      regex: \/\/.*,
      css: 'comments'
    },
    {
      regex: /^\s*@\w+/gm,
      css: 'decorator'
    },
    {
      regex: /(['\"]{3})([^\1])*?\1/gm,
      css: 'comments'
    },
    {
      regex: /"(?!")(?:\.|\\\"|[^\""\n])*"/gm,
      css: 'string'
    },
    {
      regex: /'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,
      css: 'string'
    },
    {
      regex: /\+|\-|\*|\/|\%|=|==/gm,
      css: 'keyword'
    },
    {
      regex: /\b\d+\.?\w*/g,
      css: 'value'
    },
    {
      regex: new RegExp(this.getKeywords(funcs), 'gmi'),
      css: 'functions'
    },
    {
      regex: new RegExp(this.getKeywords(keywords), 'gm'),
      css: 'keyword'
    },
    {
      regex: new RegExp(this.getKeywords(special), 'gm'),
      css: 'color1'
    }
            ];

  this.forHtmlScript(regexLib.aspScriptTags);
};

Brush.prototype = new BrushBase();
Brush.aliases = ['py', 'python'];
module.exports = Brush;