// import * as contentstack from 'contentstack';
const contentstack = require('contentstack');
const dotenv = require("dotenv");

dotenv.config({path:"../config.env"});




const Stack = contentstack.Stack("blt98440613fdc79fff","cs8af1bb3390bd2e6a7e4fa5b3", "dheerajdevelopment");


const getNav = async (req, res) =>{
    const Query = Stack.ContentType('header_dheeraj').Entry("blt76e773517749f387")
    Query.fetch()
       .then((entry) => {
           res.status(200).json({
            status: 200,
            data: entry.toJSON(),
          });
       })
       .catch((err) => {
           res.status(404).json({
                error: err
           })
       });
}



const getMainContent = async (req, res) =>{
    const Query = Stack.ContentType('main_content_dheeraj').Entry("blt4ee7b253f1bdbd30")
    Query.fetch()
       .then((entry) => {
           res.status(200).json({
            status: 200,
            data: entry.toJSON(),
          });
       })
       .catch((err) => {
           res.status(404).json({
                error: err
           })
       });
}



const getBanner = async (req, res) =>{
    const Query = Stack.ContentType('banner_dheeraj').Entry("bltf7bddafe0c54ccc1")
    Query.fetch()
       .then((entry) => {
           res.status(200).json({
            status: 200,
            data: entry.toJSON(),
          });
       })
       .catch((err) => {
           res.status(404).json({
                error: err
           })
       });
}


const getClients = async (req, res) =>{
    const Query = Stack.ContentType('slider_dheeraj').Entry("blt94edcffea709bda0")
    Query.fetch()
       .then((entry) => {
           res.status(200).json({
            status: 200,
            data: entry.toJSON(),
          });
       })
       .catch((err) => {
           res.status(404).json({
                error: err
           })
       });
}

const getFooter = async (req, res) =>{
    const Query = Stack.ContentType('pawan_contentstack_footer').Entry("bltaddaf2cfffc122b9")
    Query.fetch()
       .then((entry) => {
           res.status(200).json({
            status: 200,
            data: entry.toJSON(),
          });
       })
       .catch((err) => {
           res.status(404).json({
                error: err
           })
       });
}


module.exports= {getBanner, getNav, getMainContent, getClients, getFooter};