
import Header from "./Header.tsx"
import Footer from "./Footer.tsx"
function App() {
  return(

    <>
    {/* cntl + / でコメ */}
    <Header/>
    <Footer/> 
    </> // Why one element to return??? 
    // なるほど 今まで複数ページつくるとき各々のhtmlにHeader,Footer tagをコピペしていたことから解放される?
    
  );


}// App is serving as root << how can it be explaind????

export default App // you dont wanna delete this
