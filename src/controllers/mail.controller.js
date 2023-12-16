// mail.controller.js
import mailModel from "../models/mail.schema.js";

class MailController {
  async homePage(req, res) {
    try {
      // Set isRead to false for all existing documents
      await mailModel.updateMany({}, { $set: { isRead: false } });
      let allMails = await mailModel.find({}).sort('-createdAt');
      res.render('homePage', { allMails });
    } catch (error) {
      // Handle errors appropriately (e.g., log the error)
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async mailDetails(req, res) {
    try {
      const mailId = req.params.id;
      const allMails = await mailModel.find({}).sort('-createdAt');
      const mail = await mailModel.findById(mailId);

      // Render the mailDetails page with the specific mail data
      res.render('mailDetails', { mail,allMails });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  }

  async markFavorite(req, res) {
    try {
        const mailId = req.params.id;
        const mail = await mailModel.findById(mailId);

        // Toggle the isFavorite status
        mail.isFavourite = !mail.isFavourite;

        // Save the updated mail document
        await mail.save();

        // Send the updated status as JSON response
        res.json({ isFavourite: mail.isFavourite });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async markRead(req, res) {
    try {
        const mailId = req.params.id;
        // Update the mail's isRead status in the database
        await mailModel.findByIdAndUpdate(mailId, { isRead: true });

        // Send a JSON response indicating success
        res.json({ success: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ success: false, error: 'Failed to update read status.' });
    }
    }
}

const mailController = new MailController();

export default mailController;
