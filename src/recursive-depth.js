module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let depth = 0;
        let _tDepth = 0;
        for (let item of arr){
            
            if (item instanceof Array){
                _tDepth = this.calculateDepth(item);
            } else _tDepth = 0;
            depth = Math.max(depth,_tDepth);
        }
        depth++;
        return depth;
    }
};