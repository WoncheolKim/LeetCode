String.prototype.replicate = function(times) {
    let str = "";

    for ( i=0; i<times; i++) {
        str += this;
    }
    return str
}