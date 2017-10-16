describe('Calculate whether a number is odd and even', function() {
    
        describe('Logic', function() {
    
            var prefix = 'should mark your number as '
            var testData = [{
                    input: 1,
                    expectedResult: 'odd',
                    label: prefix + 'odd'
                },
                {
                    input: 2,
                    expectedResult: 'even',
                    label: prefix + 'even'
                },
                {
                    input: 'xyz',
                    expectedResult: 'invalid',
                    label: prefix + 'invalid when xyz'
                },
            ]            

            testData.forEach(test => {               
                it(test.label, function() {                   
                    var result = window.checkOddAndEven(test.input)                                 
                    expect(result).to.equal(test.expectedResult)                    
                })
            })
        })
    })