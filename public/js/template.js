(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['resources'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var stack1, stack2, tmp1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n<div class=\"jdash-item\">\n	<h1 class=\"jdash-head\">";
  stack1 = helpers.category || depth0.category
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "category", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h1>\n	<div class=\"jdash-body\">\n        <div class=\"resources\">\n        	";
  stack1 = helpers.item || depth0.item
  stack2 = helpers.each
  tmp1 = self.program(2, program2, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n	</div>\n</div>\n";
  return buffer;}
function program2(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n        	<div class=\"item\">\n        		<div class=\"item_handle\">\n        			<span class=\"item_title";
  stack1 = helpers.status || depth0.status
  stack2 = helpers['if']
  tmp1 = self.program(3, program3, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">";
  stack1 = helpers.name || depth0.name
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</span>\n        		</div>\n				\n        		<div class=\"additional_info\">\n	        		<div class=\"description\">";
  stack1 = helpers.description || depth0.description
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "description", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</div>\n	        		\n	        		<div class=\"row project_url\">\n	        			<div class=\"descriptor\">URL:</div>\n	        			<div class=\"data\"><a href=\"//";
  stack1 = helpers.url || depth0.url
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\" class=\"link\">";
  stack1 = helpers.url || depth0.url
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "url", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a></div>\n	        		</div>\n	        		\n	        		<div class=\"row demo\">\n	        			<div class=\"descriptor\">Demo:</div>\n	        			<div class=\"data\">";
  stack1 = helpers.demo || depth0.demo
  stack2 = helpers['if']
  tmp1 = self.program(5, program5, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(7, program7, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	        		</div>\n	        		\n	        		<div class=\"row code\">\n	        			<div class=\"descriptor\">Code:</div>\n	        			<div class=\"data\">";
  stack1 = helpers.code || depth0.code
  stack2 = helpers['if']
  tmp1 = self.program(9, program9, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(11, program11, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	        		</div>\n	        		\n	    			<div class=\"row license\">\n	    				<div class=\"descriptor\">License:</div>\n	    				<div class=\"data\">";
  stack1 = helpers.license || depth0.license
  stack2 = helpers['if']
  tmp1 = self.program(13, program13, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(15, program15, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	    			</div>\n\n	    			<div class=\"row dependencies\">\n	    				<div class=\"descriptor\">Dependencies:</div>\n	    				<div class=\"data\">";
  stack1 = helpers.dependencies || depth0.dependencies
  stack2 = helpers['if']
  tmp1 = self.program(17, program17, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.program(19, program19, data);
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</div>\n	    			</div>\n    			</div>\n    		</div>\n    		";
  return buffer;}
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += " ";
  stack1 = helpers.status || depth0.status
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "status", { hash: {} }); }
  buffer += escapeExpression(stack1);
  return buffer;}

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=\"//";
  stack1 = helpers.demo || depth0.demo
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "demo", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = helpers.demo || depth0.demo
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "demo", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>";
  return buffer;}

function program7(depth0,data) {
  
  
  return "None";}

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "<a href=\"//";
  stack1 = helpers.code || depth0.code
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "\">";
  stack1 = helpers.code || depth0.code
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "code", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</a>";
  return buffer;}

function program11(depth0,data) {
  
  
  return "None";}

function program13(depth0,data) {
  
  var stack1;
  stack1 = helpers.license || depth0.license
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "license", { hash: {} }); }
  return escapeExpression(stack1);}

function program15(depth0,data) {
  
  
  return "Unknown";}

function program17(depth0,data) {
  
  var stack1;
  stack1 = helpers.dependencies || depth0.dependencies
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "dependencies", { hash: {} }); }
  return escapeExpression(stack1);}

function program19(depth0,data) {
  
  
  return "None";}

  stack1 = helpers.section || depth0.section
  stack2 = helpers.each
  tmp1 = self.program(1, program1, data);
  tmp1.hash = {};
  tmp1.fn = tmp1;
  tmp1.inverse = self.noop;
  stack1 = stack2.call(depth0, stack1, tmp1);
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }});
})()