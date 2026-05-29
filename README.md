Checklist de Design de Classes Java
1. Propósito e Responsabilidade
A primeira pergunta, antes de qualquer linha de código: qual é a única razão para esta classe mudar? Se você consegue listar duas, ela já está fazendo coisas demais (SRP).

Esta classe representa um conceito do domínio, uma operação, ou só um saco de dados?
O nome descreve uma responsabilidade clara, ou é genérico (Manager, Helper, Util, Processor)? Nomes vagos quase sempre escondem baixa coesão.
Se eu descrevesse esta classe em uma frase, precisaria usar "e"?

2. Imutabilidade e Estado
Por padrão, prefira imutabilidade. Mutabilidade é uma decisão que você justifica, não o ponto de partida.

Os campos podem ser final?
Se é um agregado de dados imutável, deveria ser um record? (Java 17/21 — elimina boilerplate de equals/hashCode/toString/getters)
O estado é sempre válido após a construção? (validação no construtor → nunca existe instância em estado inválido)
Estou expondo coleções ou objetos mutáveis internos? Se sim, faço defensive copy na entrada e na saída?

javapublic record Money(BigDecimal amount, Currency currency) {
    public Money {
        Objects.requireNonNull(amount, "amount");
        Objects.requireNonNull(currency, "currency");
        if (amount.scale() > currency.getDefaultFractionDigits())
            throw new IllegalArgumentException("scale inválida para " + currency);
    }
}
3. Encapsulamento

Campos são private? Exponho comportamento, não estado.
Estou caindo na armadilha do "anemic domain model" — getters/setters para tudo e a lógica vazando para services? Em DDD, a lógica de negócio pertence à entidade.
A API pública é a menor possível? Tudo que não precisa ser público é private/package-private.
Métodos public que não fazem parte do contrato real deveriam estar lá?

4. Construção

O construtor garante invariantes ou aceita um objeto "meio construído"?
Tem muitos parâmetros (>3-4) ou vários do mesmo tipo? Considere Builder ou agrupar em value objects.
Dependências chegam por injeção (construtor) ou são instanciadas internamente? Dependa de abstrações — facilita teste e respeita DIP.
Construtor faz trabalho pesado (I/O, queries)? Construtor deve construir, não executar.

5. Igualdade, Hashing e Identidade
Esta é a fonte de bugs mais silenciosa em Java.

A classe tem identidade (entidade — igualdade por ID) ou é um value object (igualdade por valor)? São contratos opostos.
Se sobrescrevi equals, sobrescrevi hashCode? (e vice-versa)
Vou usar instâncias como chave de Map ou em Set? Então equals/hashCode precisam estar corretos e baseados em campos imutáveis.
record resolve isso de graça para value objects.

6. Herança vs. Composição

Prefira composição. Pergunte: "X é um Y, sempre, em todos os contextos?" Se há dúvida, é composição.
Se permito herança, a classe foi projetada para isso (documentei o contrato dos métodos protegidos)? Senão, marque final.
Subclasses respeitam Liskov — não enfraquecem pré-condições nem violam invariantes da base?
sealed (Java 17) é uma alternativa melhor quando você quer um conjunto fechado e conhecido de subtipos.

7. Tratamento de Erros

Valido entradas na fronteira (argumentos do construtor e métodos públicos)?
Uso exceções específicas, não RuntimeException genérica?
Retorno Optional para "ausência legítima" em vez de null? (nunca Optional em campos ou parâmetros)
Lanço exceção checked só quando o chamador pode realmente recuperar?

8. Thread-Safety
Uma decisão consciente, mesmo que a resposta seja "não é thread-safe".

Esta classe será compartilhada entre threads?
Imutável → thread-safe de graça (o melhor caminho).
Se há estado mutável compartilhado, como protejo? A política de sincronização está documentada?

9. Testabilidade
Se é difícil testar, o design está ruim — o teste é o sintoma, não o problema.

Consigo instanciar e testar sem subir Spring context inteiro, banco, ou Kafka?
Dependências são mockáveis (interfaces injetadas)?
Há lógica em métodos static/private complexos que não consigo testar isoladamente?
Efeitos colaterais estão isolados das regras de negócio puras?

10. Coesão e Acoplamento

Os métodos operam sobre o mesmo conjunto de campos? (alta coesão) Ou tenho grupos de métodos que usam campos diferentes — sinal de duas classes disfarçadas?
A classe conhece detalhes demais de outras (a.getB().getC().doSomething() — violação de Lei de Demeter)?
Depende de tipos concretos onde uma interface bastaria?
