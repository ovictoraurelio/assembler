(()=>{function d(i){return(h++).toString().pad(3)+': '+i+'\n'}function e(){let i='WIDTH = 8;\nDEPTH = 256;\n\nADDRESS_RADIX = DEC;\nDATA_RADIX = BIN;\n\nCONTENT\n\nBEGIN\n\n';h=0,f.element.val().split('\n').forEach(j=>{const k=j.toBinaryAssembly().replace(/(.{8})/g,d);i+='\n--'+j+'\n'+k+'\n'}),g.element.val(i)}let f={element:$('#assembly')},g={element:$('#compiled')};String.prototype.getType=function(){switch(!0){case /(j\ |jal)/.test(this):return console.log('DO TIPO J'),'J';case /(addi|addiu|beq|bne|ble|bgt|beqmm|lbu|lhu|lui|lw|sb|sh|slti|sw|andi|sxori)/.test(this):return console.log('DO TIPO I'),'I';case /(add|and|jr|mfhi|mflo|sll|sllv|slt|sra|srav|srl|sub|break|rte|mult|push|nop|addu|subu|xor)/.test(this):return console.log('DO TIPO R'),'R';default:return console.log('---  TIPO und ---'),!1;}},String.prototype.toBin=function(){return(this>>>0).toString(2)},String.prototype.pad=function(i){return('00000000000000000000000000000000'+this).slice(-i)},String.prototype.OPCODE=function(){switch(!0){case /addi\ /.test(this):return'001000';case /addiu\ /.test(this):return'001001';case /beq\ /.test(this):return'000100';case /bne\ /.test(this):return'000101';case /ble\ /.test(this):return'000110';case /bgt\ /.test(this):return'000111';case /beqmm\ /.test(this):return'000001';case /lbu\ /.test(this):return'100100';case /lhu\ /.test(this):return'100101';case /lui\ /.test(this):return'001111';case /lw\ /.test(this):return'100011';case /sb\ /.test(this):return'101000';case /sh\ /.test(this):return'101001';case /slti\ /.test(this):return'001010';case /sw\ /.test(this):return'101011';case /andi\ /.test(this):return'001100';case /sxori\ /.test(this):return'001110';case /add\ /.test(this):return'000000';case /and\ /.test(this):return'000000';case /jr\ /.test(this):return'000000';case /mfhi\ /.test(this):return'000000';case /mflo\ /.test(this):return'000000';case /sll\ /.test(this):return'000000';case /sllv\ /.test(this):return'000000';case /slt\ /.test(this):return'000000';case /sra\ /.test(this):return'000000';case /srav\ /.test(this):return'000000';case /srl\ /.test(this):return'000000';case /sub\ /.test(this):return'000000';case /break\ /.test(this):return'000000';case /rte\ /.test(this):return'010000';case /mult\ /.test(this):return'000000';case /push\ /.test(this):return'000000';case /nop\ /.test(this):return'000000';case /addu\ /.test(this):return'000000';case /subu\ /.test(this):return'000000';case /xor\ /.test(this):return'000000';default:return!1;}},String.prototype.RD=function(){return this.split('$')[1].split(',')[0]},String.prototype.RS=function(){return this.split('$')[2].split(',')[0]},String.prototype.RT=function(){return this.split('$')[3].split(',')[0]},String.prototype.IMMEDIATE=function(){return this.split(',')[2]},String.prototype.TARGET=function(){return this.split(' ')[1]},String.prototype.SHAMT=function(){return''},String.prototype.FUNCT=function(){switch(!0){case /add\ /.test(this):return'100000';case /and\ /.test(this):return'100100';case /jr\ /.test(this):return'001000';case /mfhi\ /.test(this):return'010000';case /mflo\ /.test(this):return'010010';case /sll\ /.test(this):return'000000';case /sllv\ /.test(this):return'000100';case /slt\ /.test(this):return'101010';case /sra\ /.test(this):return'000011';case /srav\ /.test(this):return'000111';case /srl\ /.test(this):return'000010';case /sub\ /.test(this):return'100010';case /break\ /.test(this):return'001101';case /rte\ /.test(this):return'010000';case /mult"\ /.test(this):return'011000';case /push"\ /.test(this):return'000101';case /nop\ /.test(this):return'000000';case /addu\ /.test(this):return'100001';case /subu\ /.test(this):return'100011';case /xor\ /.test(this):return'100110';default:return!1;}},String.prototype.toBinaryAssembly=function(){switch(this.getType()){case'R':return this.OPCODE()+this.RS().toBin().pad(5)+this.RT().toBin().pad(5)+this.RD().toBin().pad(5)+this.SHAMT().toBin().pad(5)+this.FUNCT();case'I':return this.OPCODE()+this.RD().toBin().pad(5)+this.RS().toBin().pad(5)+this.IMMEDIATE().toBin().pad(16);default:return this.OPCODE()+this.TARGET().toBin().pad(26);}};var h=0;$(f.element).on('keypress',e),$(document).on('click','button#copy',()=>{$(g.element).val($(g.element).val()).select(),document.execCommand('copy')}),e()})();