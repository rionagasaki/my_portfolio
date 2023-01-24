import NavBar from '../NavBar/NavBar';
import Introduction from '../Introduction/Introduction';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';



function App() {
  const headerMenuItems = ["About me", "Skill", "Project", "Article", "Contact"]
  const myItem = {
    name: "RioNagasaki", 
    imageURLString:"https://drive.google.com/drive/my-drive", 
    description:"こんにちは。\n慶應大学の学生です。エンジニアリングが好きで、Swift, Typescript, C#など幅広い技術を勉強しています。将来は多くの人に使われるような大きなサービスを作る予定です。あ、あと最近はメタバースにハマっていて、そこら辺にも浸かりたい。"};
  return (
<body className="bg-slate-900">
      <NavBar headerMenuItems={headerMenuItems} />
      <Introduction></Introduction>
      <About myItem={myItem} />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
</body>
  );
}

export default App;
