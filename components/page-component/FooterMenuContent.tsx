const FooterMenuContent = ({dataCard} : {dataCard : string[]}) =>{
    return(
                <div className="mb-30">
                    <h1 className="font-sans font-bold mb-3">Dependanceies</h1>
                    {dataCard.map(i => (
                        <span key={i} className="bg-card broder-2 rounded-xl px-3 py-2">{i}</span>  
                    ))}
                </div>
    )
}

export default FooterMenuContent;