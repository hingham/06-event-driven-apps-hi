'use strict';

const logger = require('../event-modules/logger.js');

describe('a thing', () =>{
  describe('logger handlers', () =>{
    it('logs files saved when no error', () =>{
      const spy = jest.spyOn(console, 'log');
      const isLogging = logger.fileSaved('myFile.txt');

      expect(spy).toHaveBeenCalled();

      spy.mockRestore();
    });

    it('logs error saved when error', () =>{
        const spy = jest.spyOn(console, 'error');
        const isLogging = logger.onError('myFile.txt');
  
        expect(spy).toHaveBeenCalled();
  
        spy.mockRestore();

    });
  });
});