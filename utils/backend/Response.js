class Response {
  constructor(error = true, emsg = "Internal server error.", data = null) {
    this.error = error;
    this.emsg = emsg;
    this.data = data;
  }
  getBody() {
    return {
      error: this.error,
      emsg: this.emsg,
      data: this.data,
    };
  }
  send(res) {
    res.json(this.getBody());
    res.status(this.error ? 500 : 200).end();
  }
}

export default Response;
