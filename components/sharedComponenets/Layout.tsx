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
    
    <main>
        {children}
    </main>
    
    </>
)

}
export default Layouts;
