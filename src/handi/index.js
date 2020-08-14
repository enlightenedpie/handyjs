class Handi {
  constructor() {
    this.event;
  }

  isTrusted() {
     return this.event.isTrusted;
  }

  listen(event,cb) {
    window && typeof cb === 'function' && window.addEventListener(event,cb);
  }

  listeners() {
    this.listen('resize', null);
    this.listen('touchstart', null);
    this.listen('touchmove', null);
    this.listen('touchend', null);
  }

  detect() {

  }
}

export default new Handi