module.exports = function transform(arr) {
    try{
        if (arr == undefined) throw TypeError("undefined");
        if (!(arr instanceof Array)) throw TypeError("not an array");
        
        //return arr;
        let i = 0;

        while (i < arr.length){
       
                
            if (arr[i] == "--double-prev"){
                  
                if (i == 0) {
                    arr.splice(i,1);
                        
                    continue;
                }
                arr.splice(i, 1, arr[i - 1]);
                i--;
                continue;
            }
            if (arr[i] == "--double-next"){
                  
                if (i == arr.length - 1) {
                    arr.splice(i,1);
                        
                    continue;
                }
                arr.splice(i, 1,arr[i + 1] );
                    
                continue;
            }
            
            i++;

        }
        i = 0;
        while (i < arr.length){
       
                
            if (arr[i] == "--discard-prev"){
                if (i == 0) {
                    arr.splice(i,1);
                        
                    continue;
                }
                arr.splice(i - 1, 2);
                i--;
                continue;
            }
            if (arr[i] == "--discard-next"){
                  
                if (i == arr.length - 1) {
                    arr.splice(i,1);
                        
                    continue;
                }
                arr.splice(i, 2);
                    
                continue;
            }
                
            i++;

        }

        return arr;
       
           
    }
    catch (err){
        alert(err);
        
    }
};