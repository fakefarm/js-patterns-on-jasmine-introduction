describe("Introduction", function() {
  'use strict';
  var player;
  var song;

  beforeEach(function() {
    player = new Player();
    song = new Song();
  });

  it("should be able to play a Song", function() {
    player.play(song);
    expect(player.currentlyPlayingSong).toEqual(song);

    //demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("pg. 3 - 'Object Oriented'", function() {
    beforeEach(function() {
      player.play(song);
      player.pause();
    });
    describe('Everything is an object except', function() {
      it("numbers,", function() {
        var number = typeof(3);
        expect(number).toBe('number');
      });
      it("strings,", function() {
        var string = typeof('string');
        expect(string).toBe('string');
      });
      it("boolean,", function() {
        var bool = typeof(true);
        expect(bool).toBe('boolean');
      });
      it("undefined,", function() {
        var nully = typeof(undefined);
        expect(nully).toBe('undefined');
      });
      it("null is stated, but it returns as 'object'. hmm wonder why?", function() {
        var nully = typeof(null);
        expect(nully).toBe('object');
      });
    });

    describe('Functions are objects, too. They can have properties and methods', function() {
      it("for example, this function has both a method and a property. The property is set then, the the function's method is called to change the property's value. once it does that, you can see it passes.", function() {
        var boom = function bar() {};
        boom.field = 'blah';
        boom.zoom = function() { boom.field = 'bar'; };
        boom.zoom();
        expect(boom.field).toBe('bar');
      });
      describe("TESTING AH-HA. I was over complicating my expectation rather than reducing it to a simple boolean or string matching. While this is not the end all, I'm starting to realize I can even !! a property just to convert it's contents into true so to easily test it. Nice." , function() {});
    });

    describe('Even variables are objects.', function() {
      xit('Y U FAIL? This variable has a color attribute associated with it.', function() {
        var apple = 'fruit';
        apple.color = 'red';
        expect(apple.color).toBe('red');
      });
      describe("Attributes set the rules, like if a variable can be changed, deleted, or enumerated in a 'for-in' loop", function() {
        it("This variable cannot be enumerated. Is that because it's a string?", function() {
          var cart = 'stuff in here';
          var not_an_enum = cart.propertyIsEnumerable();
          expect(not_an_enum).toBe(false);
        });
      });
      describe('Objects are just collections of named properties, a list of key-value pairs', function() {
        it("??? What is the benefit of having the word 'object' be returned from typeof()?", function() {
          var my_object = {};
          expect(typeof(my_object)).toBe('object');
        });
      });
    });
  });
});

