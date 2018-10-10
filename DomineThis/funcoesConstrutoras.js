function Cliente (nome, idade, sexo, vestimenta) {
	this.nome = nome;
	this.idade = idade;
	this.sexo = sexo;
	this.vestimenta = vestimenta;

	this.comprar = function(roupas){
		console.log(`${this.nome} comprou 2 peças de ${this.vestimenta}`);
	};
}
var Samuel = new Cliente('Samuel',19,'Masculino','Camiseta');
