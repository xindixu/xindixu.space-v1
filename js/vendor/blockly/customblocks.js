//generate parts

//define
Blockly.Blocks['generate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Generate parts");
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField("Row:")
        .appendField(new Blockly.FieldNumber(1, 1, 5), "row");
    this.appendValueInput("col")
        .setCheck("Number")
        .appendField("Column:")
        .appendField(new Blockly.FieldNumber(1, 1, 4), "col");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("Enter row and column to generate parts");
 this.setHelpUrl("");
  }
};

//code
Blockly.JavaScript['generate'] = function(block) {
  var number_row = block.getFieldValue('row');
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var number_col = block.getFieldValue('col');
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "setup("+value_row+","+value_col+")";
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


//get color

Blockly.Blocks['colorscan'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Scan Color");
    this.appendValueInput("row")
        .setCheck("Number")
        .appendField("Row")
        .appendField(new Blockly.FieldVariable("row#"), "r");
    this.appendValueInput("col")
        .setCheck("Number")
        .appendField("Column")
        .appendField(new Blockly.FieldVariable("col#"), "c");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("Scan parts to get color");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['colorscan'] = function(block) {
  var variable_r = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('r'), Blockly.Variables.NAME_TYPE);
  var value_row = Blockly.JavaScript.valueToCode(block, 'row', Blockly.JavaScript.ORDER_ATOMIC);
  var variable_c = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('c'), Blockly.Variables.NAME_TYPE);
  var value_col = Blockly.JavaScript.valueToCode(block, 'col', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "getColor("+value_row+","+value_col+")";
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


//color sort


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



Blockly.JavaScript['colorsort'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'colorSort()';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};


//put on belt
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


Blockly.JavaScript['putonbelt'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'putOnBelt()';
  return [code, Blockly.JavaScript.ORDER_MEMBER];
};
