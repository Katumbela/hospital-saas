import { NavBar } from "../../components";
import { Layout } from "../../components/layout/layout";

export function HomePage() {
  document.title = ' Admin Page | TATVA SOFTWARE'
  return (
    <>
      <div className="hidden lg:block">
        <NavBar />
        <Layout>
          <div className="mx-auto h-[.4rem] w-[15%] rounded-full bg-primary relative"></div>
          <div className="content">
            <h1 className="text-3xl font-bold mb-4">Main Content</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              imperdiet...
            </p>
            {/* Adicione mais conteúdo aqui para demonstrar a rolagem */}
          </div>
        </Layout>
      </div>
      <div className="lg:hidden">
        <center className="text-white">
          <h1 className="text-4xl mt-[45vh]">
            Não disponível ainda para este tamanho de tela
          </h1>
        </center>
      </div>
    </>
  );
}
