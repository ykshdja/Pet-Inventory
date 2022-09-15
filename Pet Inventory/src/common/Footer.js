import React from 'react';

function Footer(props)
{
  let thisYear =(new Date()).getFullYear();
  return (
    <footer>
      Copyright &reg; {thisYear} Designed by Yash Khanduja at Mohawk College
    </footer>
  );
}

export default Footer;