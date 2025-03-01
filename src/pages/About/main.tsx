import Toolbar from "../../components/toollbar/toolbar";
import './about.css';

export default function About(): React.ReactElement {
    return (
        <>
            <Toolbar />
            <main>
                <div id="container_About">
                    
                    <div id="content_About">
                        <section id="about-me">
                            <h2>Olá, bem-vindo!</h2>
                            <p>
                                Sou um desenvolvedor web com experiência em JavaScript, React, CSS, HTML, Bootstrap, Git e postgreSQL.
                            </p>
                            <p>
                                Possuo habilidades em pensamento criativo, inteligência emocional, autoaprendizagem e análise aprofundada, buscando oportunidades para aplicar minhas habilidades e contribuir para o sucesso da equipe e da organização.
                            </p>
                        </section>

                        <section id="professional-experience">
                            <h2>Experiência profissional</h2>
                            <ul>
                                <li>
                                    <h3>Estoquista</h3>
                                    <h4>Panificadora Lageado, Botucatu, São Paulo</h4>
                                    <h5>Junho de 2023 - Presente</h5>
                                    <ul>
                                        <li>Responsável pelo controle de estoque, incluindo entrada, saída e inventário de produtos.</li>
                                        <li>Experiência em sistemas de gestão de estoque e etiquetagem de produtos.</li>
                                        <li>Utilização de software de gestão de estoque (Multix ERP).</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Auxiliar Geral</h3>
                                    <h4>Pizzaria Italiana, Botucatu, São Paulo</h4>
                                    <h5>Novembro de 2018 - Junho de 2023</h5>
                                    <ul>
                                        <li>Auxiliava na preparação de pizzas e esfihas.</li>
                                        <li>Limpeza e organização do ambiente de trabalho, utensílios e equipamentos utilizados na produção.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Operador de Produção</h3>
                                    <h4>Seara Alimentos, Dourados, Mato Grosso do Sul</h4>
                                    <h5>Julho de 2017 - Setembro de 2018</h5>
                                    <ul>
                                        <li>Seguia procedimentos de segurança e qualidade na linha de produção.</li>
                                        <li>Trabalhava em equipe e atingia metas de produtividade.</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section id="education">
                            <h2>Educação</h2>
                            <ul>
                                <li>
                                    <h3>Curso Técnico em Programação Front-End</h3>
                                    <h4>SENAI, Botucatu, São Paulo</h4>
                                    <ul>
                                        <li>Metodologias Ágeis - 12 horas</li>
                                        <li>Controle de Versão - 16 horas</li>
                                        <li>Lógica de Programação - 40 horas</li>
                                        <li>Codificação Front-End (HTML | CSS | JS | ANGULAR) - 140 horas</li>
                                        <li>Interação com API - 40 horas</li>
                                        <li>Fundamentos de Segurança da Informação - 2 horas</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Curso Técnico em Tecnologia da Informação</h3>
                                    <h4>Rocketseat, Aprendizado Online</h4>
                                    <ul>
                                        <li>Fundamentos em Tecnologia da Informação e Comunicação</li>
                                        <li>Fundamentos de Javascript</li>
                                        <li>Controle de Versão</li>
                                        <li>Lógica de Programação</li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>Bootcamps de Desenvolvimento Web</h3>
                                    <h4>Digital Innovation One, Aprendizado Online</h4>
                                    <ul>
                                        <li>Bootcamp iFood - Front-End</li>
                                        <li>Bootcamp iFood - Games</li>
                                        <li>Desenvolvedor React</li>
                                    </ul>
                                </li>
                            </ul>
                        </section>

                        <section id="language">
                            <h2>Idiomas</h2>
                            <ul>
                                <li>Português - Nativo</li>
                                <li>Inglês - Básico</li>
                                <li>Espanhol - Intermediário</li>
                            </ul>
                        </section>

                    </div>
                    
                </div>
            </main>
        </>
    )
}