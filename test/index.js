var subjects = require('..')
var assert = require('assert')

var Tag = require('@weo-edu/schema-tag')
var validator = require('@weo-edu/validate')
var validateTag = validator(Tag)




describe('subjects', function () {
  it('should all be valid tags', function() {
    subjects.forEach(function(subject) {
      var validation = validateTag(subject)
      assert(validation.valid)
    })
  })

})
