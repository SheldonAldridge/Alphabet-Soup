let str;

        str = prompt("Insert word/name here!");

        console.log(str);

        function alphabetSoup(str) {

            // convert string to array
            str = str.split("");

            // once its an array you can sort it
            str.sort();
            
            // now that it is sorted we can use join to convert it back into a String
            str = str.join("")

            return str;        
        };

        console.log(alphabetSoup(str));