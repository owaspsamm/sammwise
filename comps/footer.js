import Image from 'next/image'

const Footer = () => {
    return ( 
        <footer>
            <a href="https://owasp.org/">
                <Image src ="/Footer.png" width = {300} height={100} />
            </a>
        </footer>
     );
}
 
export default Footer;
