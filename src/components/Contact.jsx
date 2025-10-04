import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
    return(
    <>
        <div className="contact-container">
            <p>
                {<EmailIcon sx={{  verticalAlign: 'middle', marginRight: '8px' }}/> } heliojunioferreira10@gmail.com <br />
                {<WhatsAppIcon sx={{  verticalAlign: 'middle', marginRight: '8px' }} />} (35) 9 9981-7339 <br />
                {<LinkedInIcon sx={{  verticalAlign: 'middle', marginRight: '8px' }} />} /helio-junio
            </p>
            <img className="icones-linguagem" src="./src/assets/Icones.svg" alt="Icones de linguagem de programação" />
        </div>
    </>
    )
}

export default Contact;