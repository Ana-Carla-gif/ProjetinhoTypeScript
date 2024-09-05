import { Tarefa } from "./tipos";

const tarefas: Tarefa[] = [

    // CRIEI ESSE OBJETO PARA FACILITAR NA HORA DOS TESTE
    {
      titulo: "COZINHAR",
      descricao: "ALMOÇO",
      dataVencimento: new Date("02-12-2024"),
      prioridade:"Alta",
      status : "pendente"
    }
  ];
  // CRIEI UMA FUNÇAO PARA ADICIONAR UMA TAREFA
  // ADICIONEI O COMANDO .trim() para ELIMINAR OS ESPAÇOS EM BRANCO e (INÍCIO E FINAL) não dar erros no código.
  //UTILIZEI NEW DATE PARA COLOCAR A DATA NO FORMATO.
  function adicionarTarefa() {
    const titulo = prompt("Digite o título da tarefa:")?.trim();
    const descricao = prompt("Digite a descrição da tarefa:")?.trim()!;//  ? Garante que vai ser uma string (vazia ou não )
    let dataVencimento = new Date(prompt("Digite a data de vencimento (DD-MM-AAAA):")!);
    const prioridade = prompt("Digite a prioridade (Baixa, Media, Alta):")?.trim()!;
  
  
  // Validação dos campos
  //UTILIZEI (!) PARA TORNAR O TÍTULO DA TAREFA OBRIGATÓRIO.
  if (!titulo) {
    console.log("O título da tarefa é obrigatório.");
    return;
  }
  
  // Validação da data
  //UTILIZEI isNaN para verificar se a data inserida pelo usuário é válida.
//   if (isNaN(dataVencimento)) {
//     console.log("Data de vencimento inválida. Por favor, insira no formato AAAA-MM-DD.");
//     return;
//   }
  
  // Validação da prioridade
  let prioridadesValidas = ["Baixa", "Media", "Alta"];
  console.log(`prioridade:${prioridade}:`)
    if (!prioridadesValidas.includes(prioridade)) {
      console.log("Prioridade inválida. Opções válidas: Baixa, Media, Alta.");
      return;
    }
    const novaTarefa: Tarefa = {
      titulo: titulo,
      descricao: descricao,
      dataVencimento: dataVencimento,
      prioridade: prioridade,
      status: "pendente"
    };
  
    tarefas.push(novaTarefa);
    console.log(tarefas);
    
    console.log("Tarefa adicionada com sucesso!");
  }
  
  //FUNÇÃO EDITAR SIMPLES
  function editarTarefa() {
    const tarefaEditar = prompt("Digite o título da tarefa a ser editada: ")?.trim();
  
     //Essa linha busca a posição (índice) da tarefa que precisa ser editada dentro da lista de tarefas (armazenada em um array chamado tarefas).
     // UTILIZO A FUNÇÃO findIndex para percorrer a função e comparar o titulo que o usuário digitou e o que está na lista.
     // caso encontre o título , ficará armazenado index.
    const index = tarefas.findIndex((tarefa) => tarefa.titulo === tarefaEditar);
  
    if (index !== -1) {
      //SE A TAREFA FOR ENCONTRADA , O USUÁRIO IRÁ DIGITAR UMA "NOVA TAREFA"
    
      const novoTitulo = prompt("Novo título: ")?.trim();
      const novaDescricao = prompt("Nova descrição: ")?.trim();
      const novaDataVencimento = prompt("Nova data de vencimento (DD-MM-AAAA): ")!.trim();
      const novaPrioridade = prompt("Nova prioridade (Baixa, Média, Alta): ")?.trim();
  
      
      
  // A TAREFA ANTERIOR IRÁ ATUALIZAR 
      tarefas[index] = {
        titulo: novoTitulo || tarefas[index].titulo, // Se o usuário editar algum campo da parte de cima , será uzado para atualizar o código posterior.
        //  UTILIZEI' || ', POIS CORRESPONDE AO "SE NÃO " .
        // CASO O USUÁRIO NÃO DIGITE UM NOVO "VALOR"  O VALOR ANTIGO É MANTIDO.
        //BASICAMENTE O "(OU) (||)" FUNCIONA DA SEGUINTE MANEIRA : SE O PRIMEIRO VALOR FOR FALSO EXECUTA O OUTRO.
  
        descricao: novaDescricao || tarefas[index].descricao,
        dataVencimento: new Date(novaDataVencimento)  || tarefas[index].dataVencimento,
        prioridade: novaPrioridade || tarefas[index].prioridade,
        status: tarefas[index].status // Manter o status atual
      };
  
      console.log("Tarefa editada com sucesso!");
    } else {
      console.log("Tarefa não encontrada!");
    }
  }
  function removerTarefa() {
    const tarefa = prompt("Digite o título da tarefa a ser removida: ")?.trim();
  
    // Encontra o índice da tarefa a ser removido com base no título
    // SE ELE ENCONTRAR O ÍNDICE DA TAREFA É ARMAZENADO NO INDEX
    // NOVAMENTE UTILIZO O findIndex()
    const index = tarefas.findIndex((t) => t.titulo === tarefa);
  
    if (index !== -1) {
      // Confirmar a remoção
      //Se a tarefa foi encontrada:
  //Se o usuário digitar "S" ou "s", a tarefa é removida usando splice() e uma mensagem de sucesso é exibida.
  //Caso contrário, a remoção é cancelada.
  
      const confirmacao = prompt(`Tem certeza que deseja remover a tarefa "${tarefa}"? Digite "S" para SIM ou "N" para NÃO: `)!.trim();
  
      if (confirmacao.toLowerCase() === 's') { 
        // Utilizo o toLowerCase para "não diferenciar maiúscula e minúscula"
        // Remover a tarefa e exibir mensagem de sucesso
        const tarefaRemovida = tarefas.splice(index, 1)[0];
        console.log(`Tarefa "${tarefaRemovida.titulo}" removida com sucesso!`);
      } else {
        // SE NÃO A REMOÇÃO É CANCELADA
        console.log("Remoção cancelada.");
      }
    } else {
      console.log("Tarefa não encontrada na lista.");
    }
  
    return tarefas; // Retornar a lista de tarefas atualizada
  }
  
  
  function marcarComoConcluida() {
    for (let i = 0 ; i < tarefas.length ; i ++) {
      console.log(`${i+1} - ${tarefas[i].titulo} - ${tarefas[i].descricao} - ${tarefas[i].dataVencimento.getDay()}/${tarefas[i].dataVencimento.getMonth() + 1}/${tarefas[i].dataVencimento.getFullYear()} - ${tarefas[i].prioridade} - ${tarefas[i].status}`);
    }
    const indiceMarcar = parseInt(prompt("Digite o índice da tarefa a ser marcada como concluída:")!) - 1 ;
    // UTILIZO parseInt para CONVERTER DE STRING PARA UM NÚMERO INTEIRO.
    // SUBTRAIR 1 DO ÍNDICE POIS GERALEMENTE OS USUÁRIOS CONTAR A PARTIR DO 1 E O PROGRAMA A PARTIR D
    console.log(tarefas);
    
    if (indiceMarcar >= 0 && tarefas.length > 0) {
      tarefas[indiceMarcar].status = "concluída";
      console.log("Tarefa marcada como concluída com sucesso!");
    } else {
      console.log("Índice de tarefa inválido.");
    }
  }
  
  
// function listarTarefas() {
//   let tarefasOrdenadas = tarefas // Criar uma cópia para não modificar o array original
//   let op = prompt("1 - Ordenar\n2 - Filtrar")?.trim()
//   if(op === "1") {
//     let ordenarPor = prompt(`Como deseja ordenar? 
//       Digite:
//       1 - Data de vencimento
//       2 - Prioridade
//       `)?.trim()
      
//     // Ordenação
//     if (ordenarPor === "1") {
//       tarefasOrdenadas.sort((a, b) => a.dataVencimento.getTime() - b.dataVencimento.getTime());
//       tarefasOrdenadas.forEach((elemento) => {
//       console.log(elemento);

//     })} else if (ordenarPor === "2") {
//       tarefasOrdenadas.sort((a, b) => {
//         const prioridades = { Baixa: 0, Média: 1, Alta: 2 };
//         return prioridades[b.prioridade] - prioridades[a.prioridade];
//         console.log(tarefasOrdenadas);});
//     }
    
//   } else if (op === "2") {
//     let listaFiltrada = tarefas
//     op = prompt("Filtrar por \n1 - Status\n2 - Prioridade")?.trim()

//     if (op === "1") {
//       op = prompt("1 - Concluidas\n2 - Pendentes")?.trim()
//       if (op === "1") {
//         listaFiltrada = tarefas.filter((elemento) => {
//           elemento.status === "concluída"
//       })
//       console.log(listaFiltrada);
//     } else if (op === "2") {
//       listaFiltrada = tarefas.filter((elemento) => {
//         elemento.status === "pendente"
//       })
//       console.log(listaFiltrada); 
//     } 
//   } else {
//     console.log("opa");
//   }
// }
//     //   tarefasOrdenadas.sort((a, b) => a.dataCriacao.getTime() - b.dataCriacao.getTime());
//     // }
  
//     // Filtragem
//     // if (filtrarPor !== "todas") {
//     //   tarefasOrdenadas = tarefasOrdenadas.filter(tarefa => tarefa.status === filtrarPor);
//     // }
  
//     // if (prioridade !== "todas") {
//     //   tarefasOrdenadas = tarefasOrdenadas.filter(tarefa => tarefa.prioridade === prioridade);
//     // }
  
//     // if (dataVencimento) {
//     //   tarefasOrdenadas = tarefasOrdenadas.filter(tarefa => tarefa.dataVencimento.getTime() === tarefa.dataVencimento.getTime());
//     // }
  
//     // Exibição
//     console.log("Lista de tarefas:");
    
//     tarefasOrdenadas.forEach((tarefa, index) => {
      
//       let dataFormatada = new Date(tarefa.dataVencimento)
  
//       const statusIcon = tarefa.status === "concluido" ? "✅" : " ";
//       console.log (`${index + 1}. ${statusIcon} - ${tarefa.titulo} - ${tarefa.status} - ${dataFormatada.toLocaleDateString("pt-BR")} - ${tarefa.prioridade}`);
//     });
//   }
  
function listarTarefas() {
  let tarefasOrdenadas = [...tarefas]; // Criar uma cópia para não modificar o array original
  let op = prompt("1 - Ordenar\n2 - Filtrar")?.trim();

  if (op === "1") {
    let ordenarPor = prompt(`Como deseja ordenar? 
      Digite:
      1 - Data de vencimento
      2 - Prioridade `)?.trim()
      
    // Ordenação
    if (ordenarPor === "1") {
      tarefasOrdenadas.sort((a, b) => a.dataVencimento.getTime() - b.dataVencimento.getTime());
    } else if (ordenarPor === "2") {
      const prioridades = { Baixa: 0, Média: 1, Alta: 2 };
      tarefasOrdenadas.sort((a, b) => prioridades[b.prioridade] - prioridades[a.prioridade]);
    } else {
      console.log("Opção inválida para ordenação.");
    }

  } else if (op === "2") {
    let filtroOp = prompt("Filtrar por \n1 - Status\n2 - Prioridade\n3 - Data de vencimento")?.trim();

    if (filtroOp === "1") {
      let statusFiltro = prompt("1 - Concluídas\n2 - Pendentes")?.trim();
      if (statusFiltro === "1") {
        tarefasOrdenadas = tarefas.filter((tarefa) => tarefa.status === "concluída");
      } else if (statusFiltro === "2") {
        tarefasOrdenadas = tarefas.filter((tarefa) => tarefa.status === "pendente");
      } else {
        console.log("Opção inválida para filtro de status.");
      }

    } else if (filtroOp === "2") {
      let prioridadeFiltro = prompt("Digite a prioridade (Baixa, Média, Alta):")?.trim();
      tarefasOrdenadas = tarefas.filter((tarefa) => tarefa.prioridade === prioridadeFiltro);
      if (tarefasOrdenadas.length === 0) {
        console.log("Nenhuma tarefa encontrada com essa prioridade.");
      }

    } else if (filtroOp === "3") {
      let dataFiltro = new Date(prompt("Digite a data de vencimento (DD-MM-AAAA):")!);
      tarefasOrdenadas = tarefas.filter((tarefa) => tarefa.dataVencimento.getTime() === dataFiltro.getTime());
      if (tarefasOrdenadas.length === 0) {
        console.log("Nenhuma tarefa encontrada com essa data de vencimento.");
      }

    } else {
      console.log("Opção inválida para filtro.");
    }

  } else {
    console.log("Opção inválida.");
    return;
  }

  // Exibição das tarefas ordenadas ou filtradas
  console.log("Lista de tarefas:");
  tarefasOrdenadas.forEach((tarefa, index) => {
    let dataFormatada = new Date(tarefa.dataVencimento).toLocaleDateString("pt-BR");
    const statusIcon = tarefa.status === "concluída" ? "✅" : " ";
    console.log(`${index + 1}. ${statusIcon} - ${tarefa.titulo} - ${tarefa.status} - ${dataFormatada} - ${tarefa.prioridade}`);
  });
}


  function pesquisarTarefas() {
    const termoPesquisa= (prompt("Digite o termo de pesquisa:"))!.trim()// ! Garate que não será vazio 
    const resultados = tarefas.filter(tarefa =>
      tarefa.titulo.toLowerCase().includes(termoPesquisa.toLowerCase()) ||
      tarefa.descricao.toLowerCase().includes(termoPesquisa.toLowerCase())
    );
  
    if (resultados.length > 0) {
      console.log("Resultados da pesquisa:");
      resultados.forEach((tarefa, index) => {
        console.log(`${index + 1}. ${tarefa.titulo} - ${tarefa.status}`);
      });
    } else {
      console.log("Nenhuma tarefa encontrada.");
    }
  }
  
  function resumoTarefas() {
    const totalTarefas = tarefas.length;
    const tarefasPendentes = tarefas.filter(tarefa => tarefa.status === "pendente").length;
    const tarefasConcluidas = tarefas.filter(tarefa => tarefa.status === "concluída").length;
    const proximaTarefa = tarefas.sort((a, b) => a.dataVencimento.getTime()- b.dataVencimento.getTime())[0];
  
    console.log("Resumo das tarefas:");
    console.log(`Total de tarefas: ${totalTarefas}`);
    console.log(`Tarefas pendentes: ${tarefasPendentes}`);
    console.log(`Tarefas concluídas: ${tarefasConcluidas}`);
    console.log("Próxima tarefa a vencer:", proximaTarefa.titulo);
  }
  
  let i: boolean = true
  while (i) {
    const opcao = Number(prompt(`\n
      1. Adicionar tarefa
      2. Listar tarefas
      3. Editar tarefa
      4. Remover tarefa
      5. Marcar tarefa como concluída
      6. Pesquisar tarefas
      7. Resumo das tarefas
      8. Sair
    `));
  
    switch (opcao) {
      case 1:
        adicionarTarefa();
        break;
      case 2:
        listarTarefas();
        break;
      case 3:
        editarTarefa();
        break;
      case 4:
      removerTarefa();
        break;
      case 5:
        marcarComoConcluida();
        break;
      case 6:
      pesquisarTarefas() 
        break;
      case 7:
        resumoTarefas();
        break;
      case 8:
        i = false
        console.log("Programa encerrado!");
        
      default:
        console.log("Opção inválida!");
    }
  }
