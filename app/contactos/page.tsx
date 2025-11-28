export default function Contactos() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Hero / Título */}
      <div className="w-full h-fit border-b border-neongreen px-[8vw] py-[4vw]">
        <h1 className="text-[2.4vw] font-bold text-neongreen">Contactos</h1>
        <p className="text-[0.9vw] text-gray-300 mt-[0.6vw] max-w-[50vw]">
          Fale connosco para suporte, sugestões, parcerias ou dúvidas gerais. Teremos
          todo o gosto em ajudar.
        </p>
      </div>

      {/* Conteúdo */}
      <div className="w-full h-fit px-[8vw] py-[4vw] flex flex-col gap-[4vw]">
        {/* Formulário de Contato */}
        <section className="w-full h-fit">
          <h2 className="text-[1.6vw] font-bold mb-[1.2vw]">Formulário de Contato</h2>
          <form className="w-full grid grid-cols-2 gap-[1.2vw]">
            <div className="flex flex-col gap-[0.5vw]">
              <label htmlFor="nome" className="text-[0.9vw] text-gray-300">Nome</label>
              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="O seu nome"
                className="w-full bg-graydeep/40 border border-gray-700 focus:border-neongreen outline-none rounded-md px-[0.9vw] py-[0.7vw] text-[0.9vw] placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-[0.5vw]">
              <label htmlFor="email" className="text-[0.9vw] text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="o.seu@email.com"
                className="w-full bg-graydeep/40 border border-gray-700 focus:border-neongreen outline-none rounded-md px-[0.9vw] py-[0.7vw] text-[0.9vw] placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-[0.5vw] col-span-2">
              <label htmlFor="assunto" className="text-[0.9vw] text-gray-300">Assunto</label>
              <input
                id="assunto"
                name="assunto"
                type="text"
                placeholder="Sobre o que deseja falar?"
                className="w-full bg-graydeep/40 border border-gray-700 focus:border-neongreen outline-none rounded-md px-[0.9vw] py-[0.7vw] text-[0.9vw] placeholder:text-gray-500"
              />
            </div>
            <div className="flex flex-col gap-[0.5vw] col-span-2">
              <label htmlFor="mensagem" className="text-[0.9vw] text-gray-300">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={6}
                placeholder="Escreva a sua mensagem..."
                className="w-full bg-graydeep/40 border border-gray-700 focus:border-neongreen outline-none rounded-md px-[0.9vw] py-[0.7vw] text-[0.9vw] placeholder:text-gray-500"
              />
            </div>
            <div className="col-span-2 flex justify-end">
              <button
                type="submit"
                className="bg-neongreen text-black font-bold text-[0.9vw] px-[1.4vw] py-[0.8vw] rounded-md hover:opacity-90 duration-300 border border-neongreen"
              >
                Enviar Mensagem
              </button>
            </div>
          </form>
        </section>

        {/* Parcerias */}
        <section className="w-full h-fit border-t border-gray-800 pt-[3vw]">
          <h2 className="text-[1.6vw] font-bold mb-[1.2vw]">Parcerias</h2>
          <div className="grid grid-cols-3 gap-[1.2vw]">
            <div className="w-full h-full border border-gray-800 rounded-md p-[1.2vw] flex flex-col gap-[0.6vw] bg-graydeep/30">
              <h3 className="text-[1.1vw] font-semibold text-neongreen">Editoras</h3>
              <p className="text-[0.9vw] text-gray-300">
                Junte-se ao COSMO BD para lançar títulos, edições especiais e alcançar
                leitores apaixonados por HQs.
              </p>
              <div className="mt-[0.4vw]">
                <a href="mailto:parcerias@cosmobd.com" className="text-[0.85vw] text-black bg-neongreen px-[1vw] py-[0.6vw] rounded-md border border-neongreen hover:opacity-90 duration-300">
                  Falar com a equipa
                </a>
              </div>
            </div>
            <div className="w-full h-full border border-gray-800 rounded-md p-[1.2vw] flex flex-col gap-[0.6vw] bg-graydeep/30">
              <h3 className="text-[1.1vw] font-semibold text-neongreen">Lojas</h3>
              <p className="text-[0.9vw] text-gray-300">
                Integre o seu catálogo, promova produtos geek e potencialize as vendas
                com campanhas conjuntas.
              </p>
              <div className="mt-[0.4vw]">
                <a href="mailto:parcerias@cosmobd.com" className="text-[0.85vw] text-black bg-neongreen px-[1vw] py-[0.6vw] rounded-md border border-neongreen hover:opacity-90 duration-300">
                  Tornar-se parceiro
                </a>
              </div>
            </div>
            <div className="w-full h-full border border-gray-800 rounded-md p-[1.2vw] flex flex-col gap-[0.6vw] bg-graydeep/30">
              <h3 className="text-[1.1vw] font-semibold text-neongreen">Autores</h3>
              <p className="text-[0.9vw] text-gray-300">
                Publique, monetize e conecte-se com a comunidade. Damos destaque a
                novos talentos e obras independentes.
              </p>
              <div className="mt-[0.4vw]">
                <a href="mailto:autores@cosmobd.com" className="text-[0.85vw] text-black bg-neongreen px-[1vw] py-[0.6vw] rounded-md border border-neongreen hover:opacity-90 duration-300">
                  Enviar proposta
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full h-fit border-t border-gray-800 pt-[3vw]">
          <h2 className="text-[1.6vw] font-bold mb-[1.2vw]">FAQ</h2>
          <div className="w-full flex flex-col divide-y divide-gray-800 border border-gray-800 rounded-md overflow-hidden">
            {/* Cadastro */}
            <details className="group open:bg-graydeep/30">
              <summary className="flex justify-between items-center cursor-pointer list-none px-[1.2vw] py-[1vw]">
                <span className="text-[1vw] font-semibold">Cadastro</span>
                <span className="text-neongreen text-[1.2vw] group-open:rotate-45 duration-300">+</span>
              </summary>
              <div className="px-[1.2vw] pb-[1.2vw] text-[0.9vw] text-gray-300">
                Para criar a sua conta, aceda à página de registo e preencha os dados
                solicitados. Receberá um email para confirmação.
              </div>
            </details>

            {/* Leitura */}
            <details className="group open:bg-graydeep/30">
              <summary className="flex justify-between items-center cursor-pointer list-none px-[1.2vw] py-[1vw]">
                <span className="text-[1vw] font-semibold">Leitura</span>
                <span className="text-neongreen text-[1.2vw] group-open:rotate-45 duration-300">+</span>
              </summary>
              <div className="px-[1.2vw] pb-[1.2vw] text-[0.9vw] text-gray-300">
                A leitura pode ser feita diretamente no navegador. Recomenda-se ligação
                estável para melhor experiência.
              </div>
            </details>

            {/* Compras */}
            <details className="group open:bg-graydeep/30">
              <summary className="flex justify-between items-center cursor-pointer list-none px-[1.2vw] py-[1vw]">
                <span className="text-[1vw] font-semibold">Compras</span>
                <span className="text-neongreen text-[1.2vw] group-open:rotate-45 duration-300">+</span>
              </summary>
              <div className="px-[1.2vw] pb-[1.2vw] text-[0.9vw] text-gray-300">
                Aceitamos diversos métodos de pagamento. Após a confirmação, o conteúdo
                fica disponível imediatamente na sua biblioteca.
              </div>
            </details>
          </div>
        </section>
      </div>
    </div>
  );
}