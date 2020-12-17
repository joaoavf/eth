import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xf91da5B72fE8E7b6Af43a8EE021A5B9465d3b7e3'
    )

export default instance;