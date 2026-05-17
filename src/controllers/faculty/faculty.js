import { getFacultyById, getSortedFaculty } from '../../models/faculty/faculty.js';

export const facultyListPage = (req, res, next) => {
    try {
        const sortBy = req.query.sort || 'name';
        const professors = getSortedFaculty(sortBy);

        res.render('faculty/list', {
            title: 'Faculty Directory',
            facultyList: professors,
            currentSort: sortBy
        });
    } catch (error) {
        next(error);
    }
};

export const facultyDetailPage = (req, res, next) => {
    try {
        const id = req.params.facultyId;
        const member = getFacultyById(id);

        if (!member) {
            const err = new Error('Faculty Member Not Found');
            err.status = 404;
            return next(err);
        }

        res.render('faculty/detail', {
            title: `${member.name} | Faculty Profile`,
            member: member,
            bodyClass: 'faculty-detail'
        });
    } catch (error) {
        next(error);
    }
};