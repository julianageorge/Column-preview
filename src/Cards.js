 
 function Cards(props){
    return(
        <div className="lg:w-[300px]">
            <img className="pl-7 pr-7 pt-7 pb-4" src={props.image} alt={props.title}/>
            <div className=" flex justify-start pl-7 text-4xl text-light-gray  uppercase font-bigShoulders pb-7">{props.title}</div>
            <div className="justify-start p-9 text-white-p">{props.description}</div>
            <button className=" rounded-full border hover:border-white  px-4 py-2 mb-9 bg-light-gray hover:text-light-gray hover:bg-transparent transition duration-300 ease-in-out">
                {props.button}
            </button >

        </div>
    )

 }
 export default Cards;