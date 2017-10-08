(() => {                   
        /*************  Instructions template  **********
            _____________________________________________
            | OP  | RS  |  RD  |  RT  |  SHAMT  |  FUNCT |
            |  6  |  5  |  5   |   5  |     5   |    6   |
        R:  | OP  | RS  |  RD  |  RT  |  SHAMT  |  FUNCT |
        I:  | OP  | RS  |  RT  |        ADDRES / IMM     |
        J:  | OP  |           TARGET / ADDRESS           |
        */   
        String.prototype.getType = function(){
            switch(true){
                case /(j\ |jal)/.test(this):
                    console.log('DO TIPO J');
                    return 'J';
                case /(addi|addiu|beq|bne|ble|bgt|beqmm|lbu|lhu|lui|lw|sb|sh|slti|sw|andi|sxori)/.test(this):
                    console.log('DO TIPO I');
                    return 'I';
                case /(add|and|jr|mfhi|mflo|sllv|slt|srav|sub|break|rte|mult|push|nop|addu|subu|xor)/.test(this):
                    console.log('DO TIPO R');
                    return 'R';
                case /(sll|sra|srl)/.test(this):
                    console.log('DO TTIPO R, sll,sra,srl');
                    return 'SR';
                default:
                    console.log('---  TIPO und ---');
                    return false;                
            }
        };

        String.prototype.toBin = function(){
            // this operator >>> is useful to unsinged a number.
            return (this >>> 0).toString(2);        
        };
    
        String.prototype.pad = function(size){
            // have 32,bits at max of slice param;
            // if you pass: .pad(12) the number will be completed with 12 0's in left
            return ('00000000000000000000000000000000' + this).slice(-size);
        };
    
        String.prototype.OPCODE = function (){
            switch(true){
                case /addi\ /.test(this):
                    return '001000';
                case /addiu\ /.test(this):
                    return '001001';
                case /beq\ /.test(this):
                    return '000100';
                case /bne\ /.test(this):
                    return '000101';
                case /ble\ /.test(this):
                    return '000110';
                case /bgt\ /.test(this):
                    return '000111';
                case /beqmm\ /.test(this):
                    return '000001';
                case /lbu\ /.test(this):
                    return '100100';
                case /lhu\ /.test(this):
                    return '100101';
                case /lui\ /.test(this):
                    return '001111';
                case /lw\ /.test(this):
                    return '100011';
                case /sb\ /.test(this):
                    return '101000';
                case /sh\ /.test(this):
                    return '101001';
                case /slti\ /.test(this):
                    return '001010';
                case /sw\ /.test(this):
                    return '101011';
                case /andi\ /.test(this):
                    return '001100';
                case /sxori\ /.test(this):
                    return '001110';
                case /add\ /.test(this):
                    return '000000';
                case /and\ /.test(this):
                    return '000000';
                case /jr\ /.test(this):
                    return '000000';
                case /mfhi\ /.test(this):
                    return '000000';
                case /mflo\ /.test(this):
                    return '000000';
                case /sll\ /.test(this):
                    return '000000';
                case /sllv\ /.test(this):
                    return '000000';
                case /slt\ /.test(this):
                    return '000000';
                case /sra\ /.test(this):
                    return '000000';
                case /srav\ /.test(this):
                    return '000000';
                case /srl\ /.test(this):
                    return '000000';
                case /sub\ /.test(this):
                    return '000000';
                case /break\ /.test(this):
                    return '000000';
                case /rte\ /.test(this):
                    return '010000';
                case /mult\ /.test(this):
                    return '000000';
                case /push\ /.test(this):
                    return '000000';
                case /nop\ /.test(this):
                    return '000000';
                case /addu\ /.test(this):
                    return '000000';
                case /subu\ /.test(this):
                    return '000000';
                case /xor\ /.test(this):
                    return '000000';           
                default:
                    return '000000';
            }
        };        
    
        String.prototype.FUNCT = function(){
            switch(true){
                case /add\ /.test(this):
                    return '100000';
                case /and\ /.test(this):
                    return '100100';
                case /jr\ /.test(this):
                    return '001000';
                case /mfhi\ /.test(this):
                    return '010000';
                case /mflo\ /.test(this):
                    return '010010';
                case /sll\ /.test(this):
                    return '000000';
                case /sllv\ /.test(this):
                    return '000100';
                case /slt\ /.test(this):
                    return '101010';
                case /sra\ /.test(this):
                    return '000011';
                case /srav\ /.test(this):
                    return '000111';
                case /srl\ /.test(this):
                    return '000010';
                case /sub\ /.test(this):
                    return '100010';
                case /break\ /.test(this):
                    return '001101';
                case /rte\ /.test(this):
                    return '010000';
                case /mult"\ /.test(this):
                    return '011000';
                case /push"\ /.test(this):
                    return '000101';
                case /nop\ /.test(this):
                    return '000000';
                case /addu\ /.test(this):
                    return '100001';
                case /subu\ /.test(this):
                    return '100011';
                case /xor\ /.test(this):
                    return '100110';            
                default:
                    return '000000';
            }
        };

        String.prototype.RD = function(){
            return this.split('$').length > 1 ? this.split('$')[1].split(',')[0]:'';
        };
        String.prototype.RS = function(){
            //console.log(this.split('$'));
            return this.split('$').length > 2 ? this.split('$')[2].split(',')[0]:'';
        };
        
        String.prototype.RT = function(){        
            return this.split('$').length > 3 ? this.split('$')[3].split(',')[0]:'';
        };
    
        String.prototype.IMMEDIATE = function(){
            return this.split(',')[2];
        };
    
        String.prototype.TARGET = function(){
            return this.split(' ')[1];
        };
    
        String.prototype.SHAMT = function(){
            return this.split(',').length > 2 ? this.split(',')[2]:'';
        };
        
        String.prototype.toBinaryAssembly = function(){
            switch(this.getType()){        
                case 'R':
                    //const instruction = new Instruction(instructionString);
                    return this.OPCODE() + this.RS().toBin().pad(5)  + this.RT().toBin().pad(5) + this.RD().toBin().pad(5) + this.SHAMT().toBin().pad(5) + this.FUNCT();
                case 'I':
                    // OP - RS - RT - ADDRES/IMMEDIATE
                    return this.OPCODE() + this.RD().toBin().pad(5) + this.RS().toBin().pad(5) + this.IMMEDIATE().toBin().pad(16);
                case 'SR':
                console.log('SRL::');
                    console.log(this.SHAMT());
                    return this.OPCODE() + '00000' + this.RS().toBin().pad(5) + this.RD().toBin().pad(5) + this.SHAMT().toBin().pad(5) + this.FUNCT();
                default:    
                    // OP - TARGET ADDRESS
                    return this.OPCODE() + this.TARGET().toBin().pad(26);
            }
        };    
       
        let assembly = {
            element: $('#assembly')        
        };
    
        let compiled = {
            element: $('#compiled') 
        };

        var counter = 0;
        function replaceWithMemoryIndex(a,b,c){            
            return (counter++).toString().pad(3) +': '+a+'\n';
        }

        function formatBinary(title, binary){
            binary = binary.replace(/(.{8})/g, replaceWithMemoryIndex);
            return ('\n-- '+title+'\n' + binary + '\n');
        }

        function convertAllCode(){
            let compiledResult = '-- GENERATED ON victoraurelio.com/assembler\n-- at '+moment().locale('pt-br').format('lll') +'\n\nWIDTH = 8;\nDEPTH = 256;\n\nADDRESS_RADIX = DEC;\nDATA_RADIX = BIN;\n\nCONTENT\n\nBEGIN\n\n';
            //let inAssembly = '';        
            counter = 0;
            assembly.element.val().split('\n').forEach((word) => {
                
                const inAssembly = word.toBinaryAssembly().replace(/(.{8})/g, replaceWithMemoryIndex);
                
                compiledResult += ('\n--' + word + '\n' + inAssembly + '\n');                
            });
                        
            while(counter < 228){                
                compiledResult += formatBinary('nop','00000000000000000000000000000000');
            }
                    
            compiledResult += formatBinary('excpetion','00100000000111100000000000000001');            
            compiledResult += formatBinary('exception', '00000000000000000000000000001101');                       
            compiledResult += formatBinary('nop','00000000000000000000000000000000');        
            compiledResult += formatBinary('exception', '00111100000111100000000000000010');                        
            compiledResult += formatBinary('exception', '00000000000111101111010000000010');            
            compiledResult += formatBinary('exception', '00000000000000000000000000001101');            
            compiledResult += formatBinary('exception', '00000000000000001111000011100100');            

            compiledResult += 'END;';

            compiled.element.val(compiledResult);
        }
        
        $(assembly.element).on('keyup', convertAllCode);
        $(document).on('click', 'button#copy', () => {
            $(compiled.element).val($(compiled.element).val()).select();
            document.execCommand('copy');
        });        
        convertAllCode();
    })();