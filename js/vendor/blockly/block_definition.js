Blockly.Blocks['generate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Generate parts");
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField("Row:");
    this.appendValueInput("col")
        .setCheck("Number")
        .appendField("Column:");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Enter row and column to generate parts");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['colorsort'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Color Sort");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Sort parts according to its color");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['colorscan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scan Color");
    this.appendValueInput("row")
        .setCheck(["Number", "Variable"])
        .appendField("Row#");
    this.appendValueInput("col")
        .setCheck(["Number", "Variable"])
        .appendField("Column#");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(315);
 this.setTooltip("Scan parts to get color");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['putonbelt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Put parts on the belt");
    this.setPreviousStatement(true, null);
    this.setColour(300);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['generate'] = function(block) {
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "setup("+value_row+","+value_col+")";
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['colorsort'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'colorSort()';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['colorscan'] = function(block) {
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "getColor("+value_row+","+value_col+")";
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};

Blockly.JavaScript['putonbelt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'putOnBelt()';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};