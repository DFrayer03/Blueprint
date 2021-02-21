function validateInput () { 
   const name = document.querySelector("#sequence").value;
    let valid = false
    let count = 0
    loop1:
    while(valid === false)
    {
        count = 0;
        for (let index = 0; index < name.length; index++) {
            if(name[index] === "A" || name[index] === "C" || name[index] === "T" || name[index] === "G" || name[index] === "a" || name[index] === "c" || name[index] === "t" || name[index] === "g" )
            {
               count++
             if(count === name.length)
               {
                valid = true
               }
            }
            else{
                alert("You have entered an incompatible sequence for the translator. Please try using A, C, T, or G!")
                break loop1;
            }
           
        }
    }
}

function translateRNA() {
     const dna = document.querySelector("#sequence").value;
   let rna = ""
     for(let index = 0; index < rna.length; index++)
    {
        if(dna[index] === "A")
        {
            rna += "A"
        }
        if(dna[index] === "C")
        {
            rna += "C" 
        }
        if(dna[index] === "T")
        {
            rna += "U"
        }
        if(dna[index] === "G")
        {
            rna += "G"
        }
        if(dna[index] === "a")
        {
            rna += "a"
        }
        if(dna[index] === "c")
        {
            rna += "c"
        }
        if(dna[index] === "t")
        {
            rna += "u"
        }
        if(dna[index] === "g")
        {
            rna += "g"
        }
    }
    return rna
 }
    
function translateDNA() {
    const dna = document.querySelector("#sequence").value;
  let dnaNew = ""
    for(let index = 0; index < dnaNew.length; index++)
   {
       if(dna[index] === "A")
       {
           dnaNew += "T"
       }
       if(dna[index] === "C")
       {
           dnaNew += "G" 
       }
       if(dna[index] === "T")
       {
           dnaNew += "A"
       }
       if(dna[index] === "G")
       {
           dnaNew += "C"
       }
       if(dna[index] === "a")
       {
           dnaNew += "t"
       }
       if(dna[index] === "c")
       {
           dnaNew += "g"
       }
       if(dna[index] === "a")
       {
           dnaNew += "t"
       }
       if(dna[index] === "g")
       {
           dnaNew += "c"
       }
   }
   return dnaNew
}
