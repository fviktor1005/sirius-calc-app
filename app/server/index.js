import app from './app';

app.set('port', process.env.OPENSHIFT_NODEJS_PORT ||  process.env.OPENSHIFT_INTERNAL_PORT || process.env.PORT || 8080);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.OPENSHIFT_INTERNAL_IP || '127.0.0.1');

app.listen(app.get('port'), app.get('ip'), function(){
    console.log("Express server listening on " + app.get('ip') + ":" + app.get('port'));
});

