class Rswitch<T> {
    private value: T;
    private matchedResult: any;
  
    constructor(value: T) {
      this.value = value;
      this.matchedResult = null;
    }
  
    match(caseValue: T, caseCallback: () => any): this {
      if (this.matchedResult === null && this.value === caseValue) {
        this.matchedResult = caseCallback();
      }
      return this;
    }
  
    default(defaultCallback: () => any): this {
      if (this.matchedResult === null && typeof defaultCallback === 'function') {
        this.matchedResult = defaultCallback();
      }
      return this;
    }
  
    matched(): any {
      return this.matchedResult;
    }
  }
  
  export default Rswitch;
  