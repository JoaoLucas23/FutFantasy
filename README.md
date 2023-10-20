Sistema web de fantasy de futebol do campeonato Brasileiro 2023

Usuario
    Atributos
        Nome
        Email
        Senha
        Saldo

    Métodos
        Cadastro
        Login
        Logout
        Escala time

TimeUsuarioRodada
    Atributos
        Usuario
        Nome
        Rodada
        Jogadores
        Preco
        Pontuacao

    Métodos
        Listar Times
        Listar Times por Status

Time
    Atributos
        Nome
        Escudo
    Metodo
        Listar Times

Jogador
    Atributos
        Nome
        Posição
        Time
        Preço
        Status
        Pontuação Média
    Metodos
        Listar Jogadores
        Listar Jogadores por Posição
        Listar Jogadores por Time
        Listar Jogaodres por Status
        Listar Jogaores com Filtragem

Confronto
    Atributos
        Time Casa
        Time Fora
        DataHora
        Placar Casa
        Placar Fora
        Rodada

    Métodos
        Listar Confrontos
        Listar Confrontos por Rodada
