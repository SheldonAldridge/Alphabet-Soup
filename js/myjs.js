let str;

        str = prompt("Insert word/name here!");

        console.log(str);

        function alphabetSoup(str) {

            // convert string to array, seperates the word into seperate letters
            str = str.split("");

            // once its an array the sort re-aranges letters acording to the alphabet
            str.sort();
            
            // now that it is sorted, it joins the letters back together
            str = str.join("")

            return str;        
        };

        console.log(alphabetSoup(str));