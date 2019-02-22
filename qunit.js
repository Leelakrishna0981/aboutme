function lengthConverter(number) {
    valNum = parseFloat(number);
    fToC = number * 3.28;
    return fToC; 
  }

QUnit.test("lengthConverter", function(assert) {
	assert.equal(lengthConverter(1), 3.28, "1 meter == 3.28 feets");
	assert.equal(lengthConverter(20), 65.6, "20 meters == 65.6 feets");
	assert.equal(lengthConverter(50), 164, "50 meters == 164 feets");
	assert.equal(lengthConverter(5), 16.4, "5 meters == 16.4 feets");
	assert.equal(lengthConverter(26), 85.28, "26 meters == 85.28 feets");
 });