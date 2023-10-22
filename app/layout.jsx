import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";


//diexport biar bisa dipake ama components yg lain, jadinya contohnya metadata.title
export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

//inget, kalo react component, awal2 harus capital letter
const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;