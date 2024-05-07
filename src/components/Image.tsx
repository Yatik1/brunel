
interface ImageProps {
    src : string
    className?:string
}


const Image : React.FC<ImageProps> = ({
    src ,
    className
}) => {
  return (
    <div className={className}>
     <img 
           src={src} 
           alt="logo"
     />
    </div>
  )
}

export default Image
