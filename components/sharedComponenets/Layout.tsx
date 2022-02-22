import Head from "next/head"

type LayoutProps={
    children: React.ReactNode,
}
function  Layouts ({children}:LayoutProps){

return(
    <>
    <Head>
    <title>WinX</title>
    </Head>
    <header>
        #sidebar
    </header>
    <main>
        {children}
    </main>
    
    </>
)

}
export default Layouts;
