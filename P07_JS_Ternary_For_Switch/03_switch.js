 console.log('---hello switch---');

 const date = new Date('2024-01-01');
 const today = date.getDay();
 let day;
 console.log(today);
 switch (today)  {
    case 0:
        day = 'sekmadienis';
        break;
    case 1:
        day = 'sekmadienis';
        break;
    case 0:
        day = 'sekmadienis';
        break;
    case 1:
        day = 'sekmadienis';
        break;
    //----------
    default:
        day = 'nezinoma diena';
    break;
 }
 console.log(`${date} yra => ${day} <=`);

 console.log('---switch with number---');

 let x = false;
 let text;
 switch (x)  {
    case 0:
        text = 'Off';
        break;
    case 1:
        text = 'On';
        break;
    case '0':
        text = 'TEKSTAS';
        break;
    case false:
        text = 'bool';
        break;
    case false && 0:
        text = 'bool and int';
        break;
    //----------
    default:
        text = 'No value found';
    break;
 }
 console.log(`=> ${text} <=`);