function trunkSelect(state, loc) {
  console.log(loc);
  if (loc == "truck") {
    var truck = document.getElementById("loaderType");
  }
  truck.options.length = 0;

  if (state == "") {
    truck.options[0] = new Option("انتخاب نوع کامیون", "");
  }
  if (state == "تریلی") {
    truck.options[0] = new Option("انتخاب نوع بارگیر", "");
    truck.options[1] = new Option("تریلی کفی", this.innerHTML);
    truck.options[2] = new Option("تریلی چادری", this.innerHTML);
    truck.options[3] = new Option("تریلی بغلدار", this.innerHTML);
  }
  if (state == "تک") {
    truck.options[0] = new Option("انتخاب نوع بارگیر", "");
    truck.options[1] = new Option("تک مسقف", this.innerHTML);
    truck.options[2] = new Option("تک روباز", this.innerHTML);
  }
  if (state == "جفت ") {
    truck.options[0] = new Option("انتخاب نوع بارگیر", "");
    truck.options[1] = new Option("جفت مسقف", this.innerHTML);
    truck.options[2] = new Option("جفت روباز", this.innerHTML);
  }
  if (state == "خاور") {
    truck.options[0] = new Option("انتخاب نوع بارگیر", "");
    truck.options[1] = new Option("خاور مسقف", this.innerHTML);
    truck.options[2] = new Option("خاور روباز", this.innerHTML);
  }
  if (state == "وانت") {
    truck.options[0] = new Option("انتخاب نوع بارگیر", "");
    truck.options[1] = new Option(" نیسان", this.innerHTML);
    truck.options[2] = new Option("  وانت", this.innerHTML);
  }
}
