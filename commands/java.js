const Discord = require('discord.js');

module.exports = {
    name: 'java',
    category: "all",
    description: "java related stuff",
    execute(message, args){
        var subTopics = ["datatype", "operator"];
        var subDesc = ["type of variable", "operations on variables/values"];
        
        if(args[0] == subTopics[0]){
            message.channel.send(dataType(args[1]));
        }
        else if(args[0] == subTopics[1]){
            var types = ["+", "-", "*", "/", "%", "++", "--", 
                 "==", "!=", ">", "<", ">=", "<=", 
                 "&", "|", "^", "~", "<<", ">>", ">>>",
                 "&&", "||", "!",
                 "=", "+="];
            var page = 1;
            message.channel.send(operator(args[1], types));/*.then(msg => {
                msg.react(left).then(r => {
                    msg.react(right);
                    
                    var left = "<:winPoggersLeft:778364418467168267>";
                    var right = "<:winPoggers:769390638126596126>";
                    const leftFilter = (reaction, user) => reaction.emoji.name == left && user.id == message.author.id;
                    const rightFilter = (reaction, user) => reaction.emoji.name == right && user.id == message.author.id;
                    
                    const back = msg.createReactionCollector(leftFilter, {time: 60000});
                    const forward = msg.createReactionCollector(rightFilter, {time: 60000});

                    back.on('collect', async(r) => {
                        page = (page - 1 == 0) ? parseInt(Math.ceil(types.length/10)) : page - 1;
                        console.log("hi");
                        msg.edit(defaultOp(types, page));
                    })
                    forward.on('collect', r => {
                        page = (page + 1 > parseInt(Math.ceil(types.length/10))) ? 1 : page + 1;
                        msg.edit(defaultOp(types, page));
                    })
                });
                    
                    
            
            });
            */
        }
        else{
            const embed = new Discord.MessageEmbed();
            embed.setTitle("Java Subtopic List");
            embed.setDescription("Syntax: win|java <subtopic> <specific>");
            for(var i = 0; i < subTopics.length; i++){
                embed.addFields(
                {name: subTopics[i], value: subDesc[i]}
                );
            }
            embed.setColor('36393F');
            message.channel.send(embed);
            return;
        }
    }
}

function dataType(s){
    const embed = new Discord.MessageEmbed();
    var str = "";
    var types = ["byte", "short", "int", "long", "float", "double", "boolean", "char"];
    if(s == types[0]){
        embed.setTitle(types[0]);
        str += "**name:** byte\n\n**type:** Primitive -> Numeric -> Integral -> Integer\n\n**size:** 1 byte\n\n" + 
        "**description:** stores whole numbers from -128 to 127\n\n**example:** byte num = 1;";
    }
    else if(s == types[1]){
        embed.setTitle(types[1]);
        str += "**name:** short\n\n**type:** Primitive -> Numeric -> Integral -> Integer\n\n**size:** 2 bytes\n\n" +
        "**description:** stores whole numbers from -32,768 to 32,767\n\n**example:** short num = 3000;";
    }
    else if(s == types[2]){
        embed.setTitle(types[2]);
        str += "**name:** int\n\n**type:**  Primitive -> Numeric -> Integral -> Integer\n\n**size:** 4 bytes\n\n" + 
        "**description:** stores whole numbers from -2,147,483,648 to 2,147,483,647\n\n**example:** int num = 43232;";
    }
    else if(s == types[3]){
        embed.setTitle(types[3]);
        str += "**name:** long\n\n**type:**  Primitive -> Numeric -> Integral -> Integer\n\n**size:** 8 bytes\n\n" + 
        "**description:** stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807\n\n**example:** long num = 4000000000L;";
    }
    else if(s == types[4]){
        embed.setTitle(types[4]);
        str += "**name:** float\n\n**type:**  Primitive -> Numeric -> Integral -> Floating-point\n\n**size:** 4 bytes\n\n" + 
        "**description:** stores fractional numbers for up to 6 to 7 decimal digits\n\n**example:** float num = 4.2132f;";        
    }
    else if(s == types[5]){
        embed.setTitle(types[5]);
        str += "**name:** double\n\n**type:**  Primitive -> Numeric -> Integral -> Floating-point\n\n**size:** 8 bytes\n\n" + 
        "**description:** stores fractional numbers for up to 15 decimal digits\n\n**example:** double num = 412.0011d;";         
    }
    else if(s == types[6]){
        embed.setTitle(types[6]);
        str += "**name:** boolean\n\n**type:**  Primitive -> Boolean\n\n**size:** 1 bit\n\n" + 
        "**description:** stores true or false\n\n**example:** boolean isBool = true;";                
    }
    else if(s == types[7]){
        embed.setTitle(types[7]);
        str += "**name:** char\n\n**type:** Primitive -> Numeric -> Character\n\n**size:** 2 bytes\n\n" + 
        "**description:** stores a single letter or ASCII values\n\n**example:** char c = 'A';";
    }
    else{
        embed.setTitle("Java Datatype List");
        embed.setDescription("Syntax: win|java datatype <type>");
        for(var t of types){
            embed.addFields(
            {name: t, value: `win|java datatype ${t}`}
            );
        }
        
    }
    embed.setDescription(str);
    embed.setColor('36393F');
    return embed;
}

//WIP
function operator(s, types){
    const embed = new Discord.MessageEmbed();
    var str = "";
    
    if(s == types[0]){
        embed.setTitle(types[0]);
        str += "**name:** addition\n\n**type:** arithmetic\n\n**description:** adds values on either side of the operator\n\n**example:** x + y";
    }
    else if(s == types[1]){
        embed.setTitle(types[1]);
        str += "**name:** subtraction\n\n**type:** arithmetic\n\n**description:** subtracts right-hand operand form left-hand operand\n\n**example:** x - y";
    }
    else if(s == types[2]){
        embed.setTitle(types[2]);
        str += "**name:** multiplication\n\n**type:** arithmetic\n\n**description:** multiplies values on either side of the operator\n\n**example:** x * y";
    }
    else if(s == types[3]){
        embed.setTitle(types[3]);
        str += "**name:**division\n\n**type:** arithmetic\n\n**description:** divides left-hand operand by right-hand operand\n\n**example:** x / y";
    }
    else if(s == types[4]){
        embed.setTitle(types[4]);
        str += "**name:** modulus\n\n**type:** arithmetic\n\n**description:** divides left-hand operand by right-hand operand and returns remainder\n\n**example:** x % y";
    }
    else if(s == types[5]){
        embed.setTitle(types[5]);
        str += "**name:** increment\n\n**type:** arithmetic\n\n**description:** increases the value of operand by 1\n\n**example:** x++";
    }
    else if(s == types[6]){
        embed.setTitle(types[6]);
        str += "**name:** decrement\n\n**type:** arithmetic\n\n**description:** decreases the value of operand by 1\n\n**example:** x--";
    }
    else if(s == types[7]){
        embed.setTitle(types[7]);
        str += "**name:** equal to\n\n**type:** relational\n\n**description:** checks if the values of two operands are equal or not, if yes then condition becomes true\n\n**example:** x == y";
    }
    else if(s == types[8]){
        embed.setTitle(types[8]);
        str += "**name:** not equal to\n\n**type:** relational\n\n**description:**checks if the values of two operands are equal or not, if values are not equal then condition becomes true\n\n**example:** x != y";
    }
    else if(s == types[9]){
        embed.setTitle(types[9]);
        str += "**name:** greater than\n\n**type:** relational\n\n**description:**: checks if the value of left operand is greater than the value of right operand, if yes then condition becomes true.\n\n**example:** x > y";
    }
    else if(s == types[10]){
        embed.setTitle(types[10]);
        str += "**name:** less than\n\n**type:** relational\n\n**description:** checks if the value of left operand is less than the value of right operand, if yes then condition becomes true\n\n**example:** x < y";
    }
    else if(s == types[11]){
        embed.setTitle(types[11]);
        str += "**name:** greater than or equal to\n\n**type:** relational\n\n**description:** checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true\n\n**example:** x >= y";
    }
    else if(s == types[12]){
        embed.setTitle(types[12]);
        str += "**name:** less than or equal to\n\n**type:** relational\n\n**description:** checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true\n\n**example:** x <= y";
    }
    else if(s == types[13]){
        embed.setTitle(types[13]);
        str += "**name:** bitwise and\n\n**type:** bitwise\n\n**description:** sets each bit to 1 if both bits are 1\n\n**example:** 5 & 1 (same as 0101 & 0001) **result** -> 1 (same as 0001)";
    }
    else if(s == types[14]){
        embed.setTitle(types[14]);
        str += "**name:** bitwise or\n\n**type:** bitwise\n\n**description:** sets each bit to 1 if any of the two bits is 1\n\n**example:** 5 | 1 (same as 0101 | 0001) **result** -> 5 (same as 0101)";
    }
    else if(s == types[15]){
        embed.setTitle(types[15]);
        str += "**name:** bitwise XOR\n\n**type:** bitwise\n\n**description:** sets each bit to 1 if only one of the two bits is 1\n\n**example:** 5 ^ 1 (same as 0101 ^ 0001) **result** -> 4 (same as 0100)";
    }
    else if(s == types[16]){
        embed.setTitle(types[16]);
        str += "**name:** bitwise compliment\n\n**type:** bitwise\n\n**description:** inverts all the bits\n\n**example:** ~5 (same as 101) **result** -> 10 (same as 1010)";
    }
    else if(s == types[17]){
        embed.setTitle(types[17]);
        str += "**name:** zero-fill left shift\n\n**type:** bitwise\n\n**description:** shift left by pushing zeroes in from the right and letting the leftmost bits fall off\n\n**example:** 9 << 1 (same as 1001 << 1) **result:** -> 2(same as 0010)";
    }
    else if(s == types[18]){
        embed.setTitle(types[18]);
        str += "**name:** signed right shift\n\n**type:** bitwise\n\n**description:** shift right by pushing copies of the leftmost bit in from the left and letting the rightmost bits fall off\n\n**example:** 9 >> 1 (same as 1001 >> 1) **result:** -> 4 (same as 0100)\n**note:** depends on bit size";
    }
    else if(s == types[19]){
        embed.setTitle(types[19]);
        str += "**name:** zero-fill right shift\n\n**type:** bitwise\n\n**description:** shift right by pushing zeroes in from the left and letting the rightmost bits fall off\n\n**example:** 9 >>> 1 (same as 1001 >> 1) **result:** -> 4 (same as 0100)";
    }
    else if(s == types[20]){
        embed.setTitle(types[20]);
        str += "**name:** logical and\n\n**type:** logical\n\n**description:** returns true if both statements are true\n\n**example:** A && B";
    }
    else if(s == types[21]){
        embed.setTitle(types[21]);
        str += "**name:** logical or\n\n**type:** logical\n\n**description:** returns true if one of the statements is true\n\n**example:** A || B";
    }
    else if(s == types[22]){
        embed.setTitle(types[22]);
        str += "**name:** logical not\n\n**type:** logical\n\n**description:** reverse the result; returns false if the result is true\n\n**example:** !A";
    }
    else if(s == types[23]){
        embed.setTitle(types[23]);
        str += "**name:** assign\n\n**type:** assignment\n\n**description:** assigns values from right side operands to left side operand\n\n**example:** B = A";
    }
    else if(s == types[24]){
        embed.setTitle(types[24]);
        str += "**name:** add and assign\n\n**type:** assignment\n\n**description:** adds right operand to the left operand and assign the result to left operand\n\n**example:** B += A (same as B = B + A)";
    }
    else{  
        return defaultOp(types, 1);
    }
    embed.setDescription(str);
    embed.setColor('36393F');
    return embed;
}

function defaultOp(types, page){
    const embed = new Discord.MessageEmbed();
    embed.setTitle("Java Operator List");
        embed.setDescription("Syntax: win|java operator <type>");
        for(var i = 0 + (page-1) * 9; i < types.length && i < (page-1) * 9 + 10; i++){
            embed.addFields(
            {name: types[i], value: `win|java operator ${types[i]}`}
            );
        }
    embed.setFooter(`Page ${page}/${parseInt(Math.ceil(types.length/10))}`);
    embed.setColor('36393F');
    return embed;
}